<template>
  <div class="container">
    <c-audio v-if="initAudio" ref="audioEle" :autoPlay="true" :playingItem="playingItem" :details="details"></c-audio>
    <h1 class="layout_title">{{details.title}}</h1>
    <!-- 章节内容 -->
    <a   @tap="pre" v-show="!noPre && initAudio" class="i_pre">pre</a>
    <a   @tap="next" v-show="!noNext && initAudio" class="i_next">next</a>
    <section v-if="initAudio && contentData.contents">
      <div class="layout_content">
        <ul>
          <li class="i_item" :class="{'layout_right':item.role == 2,'layout_left':item.role == 1,'layout_des':item.role == 0}" v-for="(item,index) in  contentData.contents" @tap="toggleZh(item,index)" :key="item.startTime">
            <b v-if="item.role != 0" class="i_name">{{contentData.roles[item.role].name}}</b>
            <span class="i_text" v-html="item.text"></span>
            <span v-if="item.show_zh  == true" class="i_text" v-html="item.text_zh"></span>
          </li>
        </ul>
      </div>
    </section>
    <div v-else class="layout_tips">
      the content is writting...<br /> if you want to help me ,please email to me ! <br /> Email:447124329@qq.com
      <br /> author:Jason.Wu
    </div>
  </div>
</template>

<script>

import Audio from "@components/video.vue"; //Audio播放组件

import { getList, getContent } from "@models/api";

export default {
  components: {
    "c-audio": Audio
  },
  data() {
    return {
      details: {
        title: "",
        unit: 0, //单元号,
        maxOrder:1,
      },
      unitList: {},
      playingItem: {
        order: 0
      },

      initAudio: false, //控制audio组件的渲染
      contentData: {
        contents: [],
        roles: {}
      },
      noPre:false,
      noNext:false,
     
    };
  },

  methods: {
    pre(){
      this.initAudio = false;
      let order = parseInt(this.playingItem.order)
      if(order <= 1){
        this.noPre = true;
        console.log('first chapter')
        return;
      }
      order=order-1;
      this.noNext = false;
      console.log(order);
      wx.navigateTo({
        url:
          "/pages/play/main?unit=" +
          this.details.unit +
          "&contentOrder=" +
          order
      });
      
    },
    next(){
      this.initAudio = false;
      let order = parseInt(this.playingItem.order);
      
       if(order>=this.maxOrder){
         this.noNext = true;
          console.log('maxOrder',this.maxOrder);
          return;
       }

      order=order+1;
      this.noPre = false;
      console.log(order);
      wx.navigateTo({
        url:
          "/pages/play/main?unit=" +
          this.details.unit +
          "&contentOrder=" +
          order
      });
       
    },
    toggleZh(item, index) {
      this.$set(
        this.contentData.contents[index],
        "show_zh",
        !this.contentData.contents[index].show_zh
      );
    }
  },

  mounted() {
    wx.showShareMenu({
      withShareTicket: true
    });
    getList()
      .then(res => {
        let unitList = res.data;
        this.unitList = unitList;

        // 调用应用实例的方法获取全局数据
        this.details.unit = parseInt(this.$root.$mp.query.unit) || 1;
        let unit = this.details.unit;

        let order = this.$root.$mp.query.contentOrder;
        let title = this.unitList[unit].children[order].title;
        let keys = Object.keys(this.unitList[unit].children);

        this.maxOrder =  Math.max(...keys);
        // console.log('keys',maxOrder)
        if (order) {
          //在具体的dialog
          this.details.title = `Unit ${unit}  ${title}-${order}`;
        }
        

        let textName = `unit${unit}_children${order}`;

        getContent(`contentData/${textName}.json`)
          .then(res => {
            let contentData = res.data;

            this.contentData = contentData;

            let order = this.$root.$mp.query.contentOrder;

            let item = this.unitList[this.details.unit].children[order];

            this.playingItem = item;

            this.playingItem.order = order;

            this.initAudio = true;

          })
          .catch((err => {
            console.log('err',err);
          }));
      })
      .catch((err => {}));

   

    //用户退出页面
    this.$mp.page.onUnload = () => {
      console.log("退出页面");
      this.$refs.audioEle.audioCtx.stop(); //销毁音频实例
      this.initAudio = false;
    };
  }
};
</script>

<style scoped lang="less">
.container {
  padding-bottom: 85px;
  .btn{
    position: fixed;
    left:15px;
    top:200px;
    padding: 10px;
    color:#fff;
    background: rgba(0,0,0,.5);
    border-radius: 5px;
    overflow: hidden;
  }
  .i_pre{
    .btn();
    
  }
  .i_next{
    .btn();
 
    left: initial;
    right:15px;
    
  }
}
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
  text-align: center;

  border: 1px dotted #ccc;
}
</style>
