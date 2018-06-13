<template>
  <div class="container">
    <div class="layout_title">Unit {{details.unit}} {{details.title}}</div>

    
 
    <!-- player style -->
    
    <c-audio ref="audioEle" :playingItem="playingItem"  :details="details"></c-audio>
    

    <ul class="layout_list_wrap" v-if="details.unit>0">
      <li v-for="(item,index) in unitList[details.unit].children" :key="index" @tap="toDialog(item)">{{item.title}}</li>
    </ul>

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

    

  </div>
</template>

<script>
import { unitList } from "../../model/index";
import Audio from  "./components/video.vue";//Audio播放组件
 

export default {
  components: {
    'c-audio':Audio
  },
  data() {
    return {
      loading:false,
      details: {
        title: "",
        unit: 0, //单元号,
      },
      unitList: unitList,
      playingItem:null
 
    };
  },

  methods: {
    toDialog(item){
       this.playingItem = item;
   
       this.$refs.audioEle.audioCtx.seek(item.startTime);//销毁音频实例
    
        
    }
     
  },

  mounted() {
    // 调用应用实例的方法获取全局数据
    this.details.unit = parseInt(this.$root.$mp.query.unit) || 1;
    let unit = this.details.unit;
    this.details.title = unitList[unit].title;

    //用户退出页面
    this.$mp.page.onUnload = ()=>{
       this.$refs.audioEle.audioCtx.destroy();//销毁音频实例
      
    }
 

  }
};


</script>

<style scoped lang="less">

 
.layout_title {
  font-size: 18px;
  padding-bottom: 10px;
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
.layout_list_wrap{
  width: 100%;
}

.layout_list_wrap{
   li{
  width: 100%;
  line-height: 28px;
  border-bottom:1px solid #ccc; 
  color:#18b4ed;
}
}


</style>
