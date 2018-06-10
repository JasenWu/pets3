<template>
  <div class="container" >
    
    <div class="layout_title">Unit {{details.unit}}   {{details.title}}</div>
    <audio id="myAudio" bindtimeupdate="MusicStart" style="width:100%;" :name="details.title" author="Jason" :poster="details.poster" :src="details.url" controls="true" >
      <view class="free-MusicProgress">
        <view :style="{'width':progress}"></view>
      </view>
    </audio>
 
  </div>
</template>

<script>
import { unitList } from "../../model/index";

export default {
  components: {},
  data() {
    return {
      details: {
        title: "",
        unit: 0, //单元号,
        url: "",
        poster:
          "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
      },
      unitList: unitList,
      audioCtx: null,
      progress:0,
    };
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },

    //开始播放
    audioPlay: function() {
      this.audioCtx.play();
    },
    //暂停播放
    audioPause: function() {
      this.audioCtx.pause();
    },
    //设置进度到57秒
    audio57: function() {
      this.audioCtx.seek(57);
    },
    //重新开始播放
    audioStart: function() {
      this.audioCtx.seek(0);
    },
    //设置是否轮播播放
    audioLoop: function() {
      if (isLoop == true) {
        isLoop = false;
        this.setData({
          loop: true,
          controls: true
        });
      } else {
        isLoop = true;
        this.setData({
          loop: false,
          controls: false
        });
      }
    },
    MusicStart(e) {
      var progress = parseInt(e.detail.currentTime / e.detail.duration * 100);
      
      this.progress = progress+'%';
      console.log("音乐播放进度为" + progress + "%");
    },
    //设置是否显示默认控件
    audioControls: function() {
      if (isControls == true) {
        isControls = false;
        this.setData({
          controls: false
        });
      } else {
        isControls = true;
        this.setData({
          controls: true
        });
      }
    }
  },

  mounted() {
    // 调用应用实例的方法获取全局数据

    this.details.unit = parseInt(this.$root.$mp.query.unit);
    let unit = this.details.unit;
    this.details.url = `http://www.renjie.net.cn/test/audio/unit${unit}.mp3`;
    this.details.title = unitList[unit - 1].title;
    this.audioCtx = wx.createAudioContext("myAudio");
    this.audioPlay();
  }
};
</script>

<style scoped>
.layout_title {
  font-size: 16px;
  padding-bottom: 10px;
}
audio {
  position: relative;
}
audio .free-MusicProgress {
  position: absolute;
   
  left: 62px;
  right:0;
  bottom: 1px;
  background: #c3c3c3;
}
audio .free-MusicProgress > view {
  background: #48c23d;
  height: 2px;
}
</style>
