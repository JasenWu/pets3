<template>
  <div class="container">
    <div class="layout_title">Unit {{details.unit}} {{details.title}}</div>

    <!-- player style -->

    <c-audio v-if="initAudio" ref="audioEle" :autoPlay="false" :playingItem="playingItem" :details="details"></c-audio>
    
    <ul class="layout_list_wrap" v-if="initAudio && playingItem.children">
      <li v-for="(item,index) in  playingItem.children" :key="index">
        <a @tap="toDetails(index)"   hover-class="navigator-hover">
               {{index}}、{{item.title}}
              <i class="icon alifont af-you"></i>
        </a>
      </li>
    </ul>

    <!-- <div v-else>The list is Writting</div> -->
    
  </div>
</template>

<script>
import Audio from "@components/video"; //Audio播放组件

import { assetsSrc, loadingConfig } from "@models/index";
export default {
  components: {
    "c-audio": Audio
  },
  data() {
    return {
      details: {
        title: "",
        unit: 0 //单元号,
      },

      playingItem: {
        order: 0
      },
      initAudio: false //控制audio组件的渲染
    };
  },

  methods: {
    toDetails(index) {
      if(this.$refs.audioEle.audioCtx){
        this.$refs.audioEle.audioCtx.stop(); //销毁音频实例
      }
      
      this.playing = false;
      wx.navigateTo({
        url:
          "/pages/play/main?unit=" +
          this.details.unit +
          "&contentOrder=" +
          index
      });
    }
  },

  mounted() {
    wx.showLoading(loadingConfig);

    wx.request({
      url: `${assetsSrc}contentData/unitList.json`, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        "content-type": "application/json" // 默认值
      },
      success: res => {
        let unitList = res.data;

        // 调用应用实例的方法获取全局数据
        this.details.unit = parseInt(this.$root.$mp.query.unit) || 1;
        let unit = this.details.unit;
        this.details.title = unitList[unit].title;
        let item = unitList[this.details.unit];

        this.playingItem = item;
        this.initAudio = true;
        wx.hideLoading();
      },
      fail(res) {
        console.log("fail", res);
      }
    });

    //用户退出页面
    this.$mp.page.onUnload = () => {
      console.log("退出页面");
       
      this.initAudio = false;
    };
  }
};
</script>

<style scoped lang="less">
.layout_title {
  font-size: 18px;
  padding-bottom: 10px;
}

.layout_content .i_item {
  font-size: 18px;
  color: #303030;
  padding-bottom: 10px;
  .i_text {
    border-radius: 5px;
    background: #eee;
    display: block;
    padding: 5px;
  }
  &.layout_des {
    text-align: left;
    .i_text {
      background: #a1e665;
      color: #303030;
    }
  }
  &.layout_left {
    text-align: left;
    .i_text {
      background: #f3f3f3;
      color: #303030;
    }
  }
  &.layout_right {
    text-align: right;
    .i_text {
      background: #d7f4fd;
    }
  }
  .i_name {
    font-size: 12px;
    color: #303030;
  }
}

.layout_list_wrap {
  width: 100%;
  li {
    width: 100%;

    a {
      color: #18b4ed;
      display: flex;
      justify-content: space-between;
      line-height: 36px;
      border-bottom: 1px solid #eee;
    }
  }
}
.layout_tips {
  padding-top: 15px;
  padding-bottom: 15px;

  border: 1px dotted #ccc;
}
.layout_navigation {
  .icon {
    font-size: 20px;
  }
  display: flex;
  color: #303030;
  font-size: 16px;
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
