<template>
  <div class="container">

    <div class="layout_title">Unit {{details.unit}} {{details.title}}</div>

    <!-- <div class="layout_content">
      <ul>
          <li class="i_item lay_left">
            <b class="i_name">Melanie:</b>
            <span class="i_text">Oh,Layth, I'm sure you recognize . Grandmother in this picture? She's in the blue 	
	         dress.</span>
          </li>
          <li class="i_item lay_right">
            <b class="i_name">Layth:</b>
            <span class="i_text">Sure, and who's that holding the hand of a boy?</span>
          </li>
          <li class="i_item lay_left">
            <b class="i_name">Melanie:</b>
            <span class="i_text">That's my older brother,Lester, with my nephew,Nicky, when he  was two years old. My sistr-in-law,Dorothy, is next to him but she's not smiling because she was angry with  Lester.Lester always leaves her and goes out of town on business.</span>
          </li>
        
      </ul>
 
    </div> -->

 

    <!-- player style -->
    <div class="audio_area" id="audioplayer">
      <div class="audio_wrp" id="music" preload="true">
        <div class="audio_play_area play " @click="startPlay" id="pButton ">
          <i class="icon_audio_default " v-show="!playing"></i>
          <i class="icon_audio_playing " v-show="playing"></i>
        </div>
        <div class="audio_length tips_global ">{{time}}</div>
        <div class="audio_info_area ">
          <strong class="audio_title ">{{details.title}}</strong>
          <div class="audio_source tips_global ">Jason</div>
        </div>
        <div id="timeline" class="progress_bar">
          <div id="playhead" :style="{'width':progress}"></div>
        </div>
      </div>
    </div>
    <div>the content is writting...</div>

    <div v-if="loading" id="loading">loading</div>

  </div>
</template>

<script>
import { unitList,timeFormat } from "../../model/index";
 
export default {
  components: {},
  data() {
    return {
      details: {
        title: "",
        unit: 0, //单元号,
      },
      unitList: unitList,
      audioCtx: null,
      progress: 0,
      loading: false,
      audioCtx:null,//音频实例
      playing:false,
      time:"00:00"
    };
  },

  methods: {
    //开始播放
    startPlay(){
      if(this.playing){//正在播放
          this.audioCtx.pause();
          this.playing = false;
      }else{
        this.audioCtx.play();
        this.playing = true;
      }
    },
 
    audioPlaying(e) {
      var progress = parseInt(
        e.mp.detail.currentTime / e.mp.detail.duration * 100
      );
      this.progress = progress + "%";
      console.log("音乐播放进度为" + e.mp.detail.currentTime);
      console.log("总长度" + e.mp.detail.duration);
    },
     
  },

  mounted() {
    // 调用应用实例的方法获取全局数据

    this.details.unit = parseInt(this.$root.$mp.query.unit) || 1;
    let unit = this.details.unit;

    this.details.title = unitList[unit - 1].title;
 
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = false;
    innerAudioContext.src = `http://www.renjie.net.cn/test/audio/unit${unit}.mp3`;
    innerAudioContext.onPlay(() => {
        console.log('开始播放')
    })
    //播放更新
    innerAudioContext.onTimeUpdate((res) => {
        this.time = timeFormat(Math.floor(innerAudioContext.currentTime))
        var progress = parseInt(innerAudioContext.currentTime /innerAudioContext.duration * 100
      );
      this.progress = progress + "%";
      
    })
    //可以播放时
    innerAudioContext.onCanplay((res) => {
       
      
    })
    innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
    })
 
    this.audioCtx = innerAudioContext;
  }
};
</script>

<style scoped>
#loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding-top: 50px;
  text-align: center;
}
#myAudio {
  /* position: fixed;
  left:15px;
  right: 0;
  bottom:15px; */
}
.layout_title {
  font-size: 18px;
  padding-bottom: 10px;
}
audio {
  position: relative;
}
audio .free-MusicProgress {
  position: absolute;

  left: 62px;
  right: 0;
  bottom: 1px;
  background: #c3c3c3;
}
audio .free-MusicProgress > view {
  background: #48c23d;
  height: 2px;
}
.layout_content {
  background: #48c23d;
  color: #000;
}
.layout_content .i_item {
  font-size: 14px;
}
.layout_content .lay_left {
  text-align: left;
}
.layout_content .lay_right {
  text-align: right;
}
.layout_content .i_name {
  font-weight: bold;
}

.layout_content .i_text {
}


/* 自定义播放皮肤 */

.audio_area #playhead {
  width: 2px;
  height: 2px;
  background-color: #0CBB08;
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
  background: transparent url('http://www.renjie.net.cn/pets3/img/icon_audio_unread26f1f1.png') no-repeat 0 0;
  width: 18px;
  height: 25px;
  vertical-align: middle;
  -webkit-background-size: 18px auto;
  background-size: 18px auto;
  
}

.audio_play_area .icon_audio_playing {
  background: transparent url('http://www.renjie.net.cn/pets3/img/icon_audio_reading_126f1f1.png') no-repeat 0 0;
  width: 18px;
  height: 25px;
  vertical-align: middle;
  -webkit-background-size: 18px auto;
  background-size: 18px auto;
  -webkit-animation: audio_playing 1s infinite;

}

@-webkit-keyframes audio_playing {
  30% {
    background-image: url('http://www.renjie.net.cn/pets3/img/icon_audio_reading_126f1f1.png')
  }
  31% {
    background-image: url('http://www.renjie.net.cn/pets3/img/icon_audio_reading_226f1f1.png')
  }
  61% {
    background-image: url('http://www.renjie.net.cn/pets3/img/icon_audio_reading_226f1f1.png')
  }
  62% {
    background-image: url(http://www.renjie.net.cn/pets3/img/icon_audio_reading_326f1f1.png)
  }
  100% {
    background-image: url(http://www.renjie.net.cn/pets3/img/icon_audio_reading_326f1f1.png)
  }
}

</style>
