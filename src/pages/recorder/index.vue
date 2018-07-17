<template>
  <div>
    ddsafadsfdas
  </div>
</template>

<script>
import { formatTime } from "@/utils/index";

export default {
  components: {},

  data() {
    return {
      logs: []
    };
  },

  mounted() {
    this.init();
  },
  methods: {
    init2(){
      let url = "http://tmp/wx96d1bf9498134556.o6zAJs_dEnSCQzHuWQQ2…92d044cf0c2555cb2fb554db39.durationTime=10004.mp3";
      this.play(url);

    },
    play(tempFilePath){
      const innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.autoplay = true;
        innerAudioContext.src = tempFilePath;
        innerAudioContext.onPlay(() => {
          console.log("开始播放");
        });
        innerAudioContext.onError(res => {
          console.log(res.errMsg);
          console.log(res.errCode);
        });
        innerAudioContext.onStop(res => {
          console.log("停止播放");
        
        });
        
        innerAudioContext.play();
    },
    init() {
      const recorderManager = wx.getRecorderManager();

      recorderManager.onStart(() => {
        console.log("recorder start");
      });
      recorderManager.onPause(() => {
        console.log("recorder pause");
      });
      recorderManager.onStop(res => {

        console.log("recorder stop", res);
        const { tempFilePath } = res;
         const innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.autoplay = true;
        innerAudioContext.src = tempFilePath;
        innerAudioContext.onPlay(() => {
          console.log("开始播放",tempFilePath);
        });
        innerAudioContext.onError(res => {
          console.log(res.errMsg);
          console.log(res.errCode);
        });
        innerAudioContext.onStop(res => {
          console.log("停止播放");
        
        });
        
        innerAudioContext.play();

        
      });
      recorderManager.onFrameRecorded(res => {
        const { frameBuffer } = res;
        console.log("frameBuffer.byteLength", frameBuffer.byteLength);
      });

      const options = {
        duration: 10000,
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 192000,
        format: "mp4",
        frameSize: 50
      };

      recorderManager.start(options);
    }
  }
};
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
