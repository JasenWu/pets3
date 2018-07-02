<template>
  <section>
    <!-- autoPlay取值为true 说明在详细播放页 -->
    <div class="audio_area" :class="{audio_area_fix:autoPlay}" :style="{width:videoWidth + 'px'}" id="audioplayer">
      <div class="audio_wrp" id="music" preload="true">
        <div class="audio_play_area"  @tap="togglePlay(playing)" >
          <i class="icon iconfont icon-bofang" style="margin-left:-5px;margin-top:-5px;font-size:30px;color:#1AAD16;" v-if="!playing"></i>
          <i class="icon iconfont icon-tablesuspend"    style="color:#1AAD16;font-size:18px;" v-else></i>
        </div>

        <div class="audio_info_area">
          <strong class="audio_title ">{{details.title}}</strong>
          <div class="audio_source tips_global ">
            {{time}} &nbsp;&nbsp;/&nbsp;&nbsp; {{duration}} 
          </div>
        </div>
        <div id="timeline" class="progress_bar">
          <div class="playhead" :style="{'width':progress}">

          </div>
          <div @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" :style="{left:leftVal+'%'}" class="i_drager"></div>
        </div>
      </div>

    </div>

  </section>

</template>
<script>
import { unitList, timeFormat, assetsSrc } from "@models/index";

export default {
  components: {},
  props: {
    details: {
      type: Object,
      default: {
        title: ""
      }
    },

    playingItem: {
      type: Object,
      default: {
        title: ""
      }
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    dragging: false, //是否正在拖拽
    videoWidth: 0
  },

  data() {
    return {
      progress: 0,
      audioCtx: null, //音频实例
      playing: false,
      time: "00:00",
      duration: "00:00",
      leftVal: 0
    };
  },
  methods: {
    touchend(e) {
      let audioCtx = this.audioCtx;
      let windowWidth = wx.getSystemInfoSync().windowWidth;

      let pos = audioCtx.duration * this.leftVal / 100;
      audioCtx.seek(pos);
    

      this.dragging = false;
    
    },
    touchstart(e) {
      let audioCtx = this.audioCtx;
      this.dragging = true;

    },
    touchmove(e) {
      let windowWidth = wx.getSystemInfoSync().windowWidth;
      let min = 15;
      let max = windowWidth - 15;
      let val = 0;

      if (e.clientX <= min) {
        val = 0;
      } else if (e.clientX >= max) {
        val = 100;
      } else {
        val = (e.clientX - 15) / (windowWidth - 30) * 100;
      }
      this.leftVal = val;
      let progress = val + "%";
      this.progress = progress;
    },
    getUrl(playingItem) {
      if (playingItem.audioName) {
        //有音频资源地址
        let name = `unit${this.details.unit}_${this.playingItem.order}.mp4`;
        return `${assetsSrc}audio/${name}`;
      } else {
        return `${assetsSrc}audio/unit${this.details.unit}.mp3`;
      }
    },
    init() {
      if (this.details.unit <= 0) {
        //非法参数，不播放
        return; //非法参数，不播放
      }
      let windowWidth = wx.getSystemInfoSync().windowWidth;
      this.videoWidth = windowWidth - 26;

      const backgroundAudioManager = wx.getBackgroundAudioManager();

      backgroundAudioManager.title = this.details.title;
      backgroundAudioManager.epname = "Pets3";
      backgroundAudioManager.singer = "Jason.wu";
      backgroundAudioManager.coverImgUrl = assetsSrc + "img/cover.jpg";

      let playingItem = this.playingItem;
      console.log("playingItem", playingItem);
      backgroundAudioManager.src = this.getUrl(playingItem);

      if (!this.autoPlay) {
        //不自动播放
        backgroundAudioManager.pause();
      }

      backgroundAudioManager.onPlay(() => {
        console.log("开始播放");
      });

      //播放更新
      backgroundAudioManager.onTimeUpdate(res => {
        console.log("播放更新");
        if (this.dragging === true) {
          console.log("正在拖拽时不再更新");
          return; //正在拖拽时不再更新
        }

        this.time = timeFormat(Math.floor(backgroundAudioManager.currentTime));

        this.duration = timeFormat(Math.floor(backgroundAudioManager.duration));
        var progress = parseInt(
          backgroundAudioManager.currentTime /
            backgroundAudioManager.duration *
            100
        );

        //更新进度条
        this.progress = progress + "%";

        //更新drager
        let windowWidth = wx.getSystemInfoSync().windowWidth;
        this.leftVal = progress;
 
      });

      //可以播放时
      backgroundAudioManager.onCanplay(res => {
        console.log("可以播放");
     
      });

      backgroundAudioManager.onWaiting(res => {
        console.log("onWaiting");

        
      });
      //音频播放结束时
      backgroundAudioManager.onEnded(res => {
        console.log("播放结束");
       
      });

      //播放错误时
      backgroundAudioManager.onError(res => {
        console.log(res.errMsg);
        console.log(res.errCode);
      });

      this.audioCtx = backgroundAudioManager;
      this.playing = true;
    },
    //开始播放
    togglePlay(state) {
      let over = false;
      if (!this.audioCtx && !this.autoPlay) {//章节列表页，未初始化时
        //没有实例的情况直接初始化
        console.log("章节列表页，未初始化时");
        this.init();
        return;
        
      } else {//播放详情页 或者已经实例化的章节列表页
        //已经结束的情况
        console.log("播放详情页 或者已经实例化的章节列表页");

        let currentTime = Math.floor(this.audioCtx.currentTime);
        let duration = Math.floor(this.audioCtx.duration);
        let over = Math.abs(duration - currentTime) <= 3;//总时长和当前位置在3秒内，则认为已经结束，重新播放
        if (currentTime <= 0 || over) {//有实例，但已经结束
          //已经播放结束
          this.init();
          return;
        } else {//有实例但未结束
          console.log("有实例但未结束");
          if (state) {
            //正在播放
             this.playing = false;
            this.audioCtx.pause();
            //  wx.showModal({
            //   title:"请求暂停",
            //   content:new String(this.playing),
            // })
           
          }else {
            this.playing = true;
             this.$forceUpdate();
            this.audioCtx.play();
            // wx.showModal({
            //   title:"请求播放",
            //   content:new String(this.playing),
            // })
           
            
          }
        }
      }
 
    }
  },

  mounted() {
    if (this.autoPlay) {
      //自动播放
      this.init();
    }
  },

  beforeDestroy() {}
};
</script>
<style lang="less">
/* 自定义播放皮肤 */

.audio_area {
  width: 100%;
  #timeline {
    width: 95%;

    .i_drager {
      left: 0%;
      @size: 16px;
      position: absolute;
      width: @size;
      height: @size;
      margin-right: -@size / 2;
      top: -@size / 2;
      border-radius: @size / 2;
      background: red;
    }
    .playhead {
      width: 0px;
      height: 2px;
      background-color: #0cbb08;
      position: relative;
    }
  }
}

.audio_area {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 16px;

  position: relative;
  font-weight: 400;
  text-decoration: none;
  -webkit-text-size-adjust: none;
}
.audio_area_fix {
  width: initial !important;
  position: fixed;
  left: 15px;
  bottom: 5px;
  right: 15px;
  z-index: 99;
}

.audio_wrp {
  border: 1px solid #ebebeb;
  background-color: #fcfcfc;
  overflow: hidden;
  padding: 12px 20px 12px 12px;
}

.audio_play_area {
  float: left;
  margin: 9px 22px 10px 5px;
  font-size: 0;
  width: 25px;
  height: 25px;
 
}

 

 
.audio_info_area {
  overflow: hidden;
}

.audio_area .audio_title {
  font-weight: 400;
  font-size: 17px;
  margin-top: -2px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.audio_area .audio_source {
  font-size: 14px;
}

.tips_global {
  color: #8c8c8c;
}

.audio_area .progress_bar {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #eee;
  height: 2px;
  width: 100%;
}
 
</style>


