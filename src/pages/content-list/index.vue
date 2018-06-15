<template>
  <div class="container">
    <div class="layout_title">Unit {{details.unit}} {{details.title}}</div>

    <!-- player style -->

    <c-audio v-if="initAudio" ref="audioEle" :playingItem="playingItem" :details="details"></c-audio>
    <ul class="layout_list_wrap" v-if="details.unit>0 && !playingItem.order ">
      <li v-for="(item,index) in unitList[details.unit].children" :key="index">
        <navigator :url="'/pages/play/main?unit=details.unit&contentOrder='+index" hover-class="navigator-hover">
               {{item.title}}
              <i class="icon alifont af-you"></i>
        </navigator>
       
      </li>
    </ul>

  </div>
</template>

<script>
import { unitList } from "@models/index";
import Audio from "@components/video"; //Audio播放组件
 

export default {
  components: {
    "c-audio": Audio
  },
  data() {
    return {
      loading: false,
      details: {
        title: "",
        unit: 0 //单元号,
      },
      unitList: unitList,
      playingItem: {
        order: 0
      },
      initAudio: false //控制audio组件的渲染
    };
  },

  methods: {
 
   
  },

  mounted() {
 
    // wx.request({
    //   url: "http://www.renjie.net.cn/pets3/data/index.js", //仅为示例，并非真实的接口地址
    //   data: {
    //     x: "",
    //     y: ""
    //   },
    //   header: {
    //     "content-type": "application/json" // 默认值
    //   },
    //   success: function(res) {
    //     console.log(res.data);
    //   }
    // });

    // 调用应用实例的方法获取全局数据
    this.details.unit = parseInt(this.$root.$mp.query.unit) || 1;
    let unit = this.details.unit;
    this.details.title = unitList[unit].title;

    // this.initAudio = true;
    // console.log("this", this.$mp.page.onLoad.toString());

    // //用户退出页面
    // this.$mp.page.onUnload = () => {
    //   console.log("退出页面");
    //   this.$refs.audioEle.audioCtx.destroy(); //销毁音频实例
    //   this.initAudio = false;
    // };
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
   
   
    navigator{
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
