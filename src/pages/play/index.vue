<template>
  <div class="container">
    <div class="layout_title">Unit {{details.unit}} {{details.title}}</div>

    <!-- player style -->

    <c-audio v-if="initAudio" ref="audioEle" :playingItem="playingItem" :details="details"></c-audio>

    <ul class="layout_list_wrap" v-if="details.unit>0 && !playingItem.order ">
      <li v-for="(item,index) in unitList[details.unit].children" :key="index" @tap="toDialog(item,index)">{{item.title}}
        <i class="icon alifont af-you"></i>
      </li>
    </ul>
      <section v-if="playingItem.order" class="layout_navigation" @tap="toList">
        <i class="icon alifont af-xiangzuo"></i>&nbsp;
        <sapn>Back</sapn>
      </section>
    <section v-if="details.unit >0 && unitList[details.unit].children[playingItem.order] && unitList[details.unit].children[playingItem.order].content && playingItem.order">
      
      <div class="layout_content">
        <ul>
          <li class="i_item" :class="{'layout_right':item.role == 2,'layout_left':item.role == 1,'layout_des':item.role == 0}" v-for="(item,index) in  unitList[details.unit].children[playingItem.order].content.contents" :key="item.startTime">
            <b v-if="item.role != 0" class="i_name">{{unitList[details.unit].children[playingItem.order].content.roles[item.role].name}}</b>
            <span class="i_text">{{item.text}}</span>
            <span v-if="item.show_zh  == true" class="i_text">{{item.text_zh}}</span>
          </li>
        </ul>

      </div>
    </section>

    <div  v-if="playingItem.order" class="layout_tips">the content is writting...</div>

  </div>
</template>

<script>
import { unitList } from "../../model/index";
import Audio from "./components/video.vue"; //Audio播放组件

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
    toList(){
      this.playingItem = {};
      this.playingItem.order = 0;
    },
    toDialog(item, index) {
      this.playingItem = item;

      this.playingItem.order = index;
      this.$refs.audioEle.audioCtx.seek(item.startTime); //路转播放
      this.$refs.audioEle.playing = false;
      this.$refs.audioEle.loading = true;
      console.log("index", index);
    }
  },

  mounted() {
    // 调用应用实例的方法获取全局数据
    this.details.unit = parseInt(this.$root.$mp.query.unit) || 1;
    let unit = this.details.unit;
    this.details.title = unitList[unit].title;

    this.initAudio = true;
    console.log("this", this.$mp.page.onLoad.toString());

    //用户退出页面
    this.$mp.page.onUnload = () => {
      console.log("退出页面");
      this.$refs.audioEle.audioCtx.destroy(); //销毁音频实例
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
  color: #000;
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
      color: #000;
    }
  }
  &.layout_left {
    text-align: left;
    .i_text {
      background: #f3f3f3;
      color: #000;
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
    color: #000;
  }
}

.layout_list_wrap {
  width: 100%;
  li {
    width: 100%;
    line-height: 36px;
    border-bottom: 1px solid #eee;
    color: #18b4ed;
    display: flex;
    justify-content: space-between;
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
  color: #000;
  font-size: 16px;
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
