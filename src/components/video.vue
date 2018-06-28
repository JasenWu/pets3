<template>
  <section>
    <!-- autoPlay取值为true 说明在详细播放页 -->
    <div class="audio_area_fix"  :style="{width:videoWidth + 'px'}" id="audioplayer">
      <div class="audio_wrp" id="music" preload="true">
        <div class="audio_play_area play " @tap="togglePlay(playing)">
          <i class="icon_audio_default " v-if="!playing"></i>
          <i class="icon_audio_playing " v-else></i>
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
    videoWidth:0,
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
      this.playing = true;
    },
    touchstart(e) {
      let audioCtx = this.audioCtx;
      audioCtx.pause();
      this.dragging = true;
      this.playing = false;
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
    init() {
      if (this.details.unit <= 0) {
        //非法参数，不播放
        return; //非法参数，不播放
      }
       let windowWidth = wx.getSystemInfoSync().windowWidth;
      this.videoWidth = windowWidth - 26;
      const innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.autoplay = this.autoPlay;
      let playingItem = this.playingItem;
      console.log("playingItem", playingItem);

      if (playingItem.audioName) {
        //有音频资源地址
        let name = `unit${this.details.unit}_${this.playingItem.order}.mp4`;
        innerAudioContext.src = `${assetsSrc}audio/${name}`;
      } else {
        innerAudioContext.src = `${assetsSrc}audio/unit${
          this.details.unit
        }.mp3`;
      }

      innerAudioContext.onPlay(() => {
        console.log("开始播放");
      });

      //播放更新
      innerAudioContext.onTimeUpdate(res => {
        console.log("播放更新");
        if (this.dragging === true) {
          console.log("正在拖拽时不再更新");
          return; //正在拖拽时不再更新
        }

        this.time = timeFormat(Math.floor(innerAudioContext.currentTime));
        // console.log("currentTime", innerAudioContext.currentTime);
        // console.log("duration", innerAudioContext.duration);

        this.duration = timeFormat(Math.floor(innerAudioContext.duration));
        var progress = parseInt(
          innerAudioContext.currentTime / innerAudioContext.duration * 100
        );

        //更新进度条
        this.progress = progress + "%";

        //更新drager
        let windowWidth = wx.getSystemInfoSync().windowWidth;
        this.leftVal = progress;

        if (
          this.playingItem &&
          this.playingItem.endTime <= innerAudioContext.currentTime
        ) {
          innerAudioContext.pause(); //暂停
          this.playing = false;
        }
      });

      //可以播放时
      innerAudioContext.onCanplay(res => {
        console.log("可以播放");
        this.playing = this.autoPlay;
      });

      innerAudioContext.onWaiting(res => {
        console.log("onWaiting");

        this.playing = false;
      });
      //音频播放结束时
      innerAudioContext.onEnded(res => {
        console.log("可以播放");
        this.playing = false;
      });

      //音频播放结束时
      innerAudioContext.onSeeking(res => {
        innerAudioContext.pause();
        this.playing = false;
      });

      //音频播放结束时
      innerAudioContext.onSeeked(res => {
        innerAudioContext.play();
        this.playing = false;
      });

      //播放错误时
      innerAudioContext.onError(res => {
        console.log(res.errMsg);
        console.log(res.errCode);
      });

      this.audioCtx = innerAudioContext;
    },
    //开始播放
    togglePlay(state) {
      if (state) {
        //正在播放
        this.audioCtx.pause();
        this.playing = false;
      } else {
        this.audioCtx.play();
        this.playing = true;
      }
    }
  },

  mounted() {
    this.init();
  },

  beforeDestroy() {}
};
</script>
<style lang="less">
/* 自定义播放皮肤 */

.audio_area {
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
  position: fixed;
  left:15px;
  bottom:5px;
  right:15px;
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
  width: 18px;
  height: 25px;
}

.audio_area .pic_audio_default {
  display: none;
  width: 18px;
}

.audio_area .audio_length {
  float: right;
  font-size: 14px;
  margin-top: 3px;
  margin-left: 1em;
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

.audio_play_area .icon_audio_default {
  background: transparent
    url("http://www.renjie.net.cn/pets3/img/icon_audio_unread26f1f1.png")
    no-repeat 0 0;
  width: 18px;
  height: 25px;
  vertical-align: middle;
  -webkit-background-size: 18px auto;
  background-size: 18px auto;
}

.audio_play_area .icon_audio_playing {
  background: transparent
    url("http://www.renjie.net.cn/pets3/img/icon_audio_reading_126f1f1.png")
    no-repeat 0 0;
  width: 18px;
  height: 25px;
  vertical-align: middle;
  -webkit-background-size: 18px auto;
  background-size: 18px auto;
  -webkit-animation: audio_playing 1s infinite;
}

@-webkit-keyframes audio_playing {
  30% {
    background-image: url("http://www.renjie.net.cn/pets3/img/icon_audio_reading_126f1f1.png");
  }
  31% {
    background-image: url("http://www.renjie.net.cn/pets3/img/icon_audio_reading_226f1f1.png");
  }
  61% {
    background-image: url("http://www.renjie.net.cn/pets3/img/icon_audio_reading_226f1f1.png");
  }
  62% {
    background-image: url(http://www.renjie.net.cn/pets3/img/icon_audio_reading_326f1f1.png);
  }
  100% {
    background-image: url(http://www.renjie.net.cn/pets3/img/icon_audio_reading_326f1f1.png);
  }
}
</style>


