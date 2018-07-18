<template>
  <div>
    <button @tap="start">start record</button>
    <button @tap="play(tempFilePath)">play record</button>
  
  </div>
</template>

<script>
import { formatTime } from "@/utils/index";

export default {
 

  data() {
    return {
      tempFilePath: "",
    };
  },

  mounted() {
    
  },
  methods: {
 
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
    start() {//开始录制
      const recorderManager = wx.getRecorderManager();

      recorderManager.onStart(() => {
        console.log("recorder start");
      });
      recorderManager.onPause(() => {
        console.log("recorder pause");
      });
      recorderManager.onStop(res => {
 
        const { tempFilePath } = res;
        this.tempFilePath = tempFilePath;
         

        
      });
      recorderManager.onFrameRecorded(res => {
        const { frameBuffer } = res;
       
      });

      const options = {
        duration: 10000,
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 192000,
        format: "m4a",
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
