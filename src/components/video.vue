<template>
<section>
   <div  class="audio_area" id="audioplayer" >
    <div class="audio_wrp" id="music" preload="true">
      <div class="audio_play_area play " @tap="togglePlay(playing)" id="pButton ">
        <i class="icon_audio_default " v-show="!playing"></i>
        <i class="icon_audio_playing " v-show="playing"></i>
      </div>
      <div class="audio_length tips_global ">{{time}}</div>
      <div class="audio_info_area ">
        <strong class="audio_title ">{{details.title}}</strong>
        <div class="audio_source tips_global ">{{author}}</div>
      </div>
      <div id="timeline" class="progress_bar">
        <div id="playhead" :style="{'width':progress}">
          <div class="i_drager"></div>
        </div>
      </div>
    </div>
 
  </div>
   
</section>
 
</template>
<script>
import {unitList, timeFormat, audioSrc, author,loadingTip } from "@models/index";
 

export default {
  components: {
 
  },
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
    autoPlay:{
      type: Boolean,
      default: false,
    },
    
 
  },
 
  data() {
    return {
      progress: 0,
     
      audioCtx: null, //音频实例
      playing: false,
      time: "00:00",
      audioSrc: audioSrc,
      author: author
    };
  },
  methods: {
    init() {
       //wx.showLoading(loadingTip)
     
      console.log('start playing')
      if (this.details.unit <= 0) {
        //非法参数，不播放
        return; //非法参数，不播放
      }

      const innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.autoplay = this.autoPlay;

      innerAudioContext.src = `${this.audioSrc}${this.details.unit}.mp3`;
 
      innerAudioContext.onPlay(() => {
        console.log("开始播放");
       
      });

      //播放更新
      innerAudioContext.onTimeUpdate(res => {
        this.time = timeFormat(Math.floor(innerAudioContext.currentTime));
        // console.log("currentTime", innerAudioContext.currentTime);
        // console.log("duration", innerAudioContext.duration);
        var progress = parseInt(
          innerAudioContext.currentTime / innerAudioContext.duration * 100
        );
        this.progress = progress + "%";

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
       this.$emit('canPlay',innerAudioContext,this);
        
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
    },
    
  },

  mounted() {
     
    this.init();
  },

  beforeDestroy() {}
};
</script>
<style lang="less">
/* 自定义播放皮肤 */

.audio_area #playhead {
  width: 2px;
  height: 2px;
  background-color: #0cbb08;
  position: relative;
  .i_drager {
    @size: 4px;
    position: absolute;
    width: @size;
    height: @size;
    right: -@size / 2;
    top: -@size / 2;
    border-radius: @size / 2;
    background: red;
  }
}

 
.audio_area {
   width: 100%;
  display: inline-block;
  vertical-align: top;
  margin: 17px 1px 16px 0;
  font-size: 0;
  position: relative;
  font-weight: 400;
  text-decoration: none;
  -webkit-text-size-adjust: none;
}
// .audio_area-fix {
//   position: fixed;
//   left:15px;
//   top:0px;
//   right:15px;
//   z-index: 0;

//   display: inline-block;
//   vertical-align: top;
 
//   font-size: 0;
 
//   font-weight: 400;
//   text-decoration: none;
//   -webkit-text-size-adjust: none;
// }

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


