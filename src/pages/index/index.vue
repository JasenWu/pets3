<template>
  <div class="container">
   <div class="layout_title">全国英语等级考试标准教程（全新版）第三级</div>
 
  <div class="layout_des">
    <span class="layout_des_belong">所属图书:</span><span class="layout_des_parent">全国英语等级考试标准教程（全新版）第三级</span>
  </div>
   <ul class="layout_unit_list_ul">
     <li v-for="(item,index) in unitList" :key="index">
      <navigator :url="'/pages/play/main?unit='+item.order" hover-class="navigator-hover">Unit {{item.order}}&nbsp;{{item.title}}</navigator>
      <div>{{item.des}}</div>
     </li>
   </ul>
 
   <div class="layout_bottom">
     <span>阅读8776</span>
     
   </div>
 
  </div>
</template>

<script>
import { unitList } from "../../model/index";
export default {
  components: {},
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
      unitList: unitList
    };
  },

  methods: {
   
    //路转至日志页面
    toLog() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    //获取用户信息
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    //点击事件
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    //this.getUserInfo();
  }
};
</script>

<style scoped lang="less" >
 
.layout_title {
    font-size: 16px;
    border-bottom: 1px solid #eee;
    text-align: left;
    padding: 10px 0;
  }

  .layout_des{
     padding: 10px 0;
  }
.layout_des .layout_des_belong{
  color:#ccc;
  
}
.layout_des  .layout_des_parent{
  color:#18b4ed;
}
.layout_unit_list_ul{

}
.layout_unit_list_ul li {

  color:#18b4ed;
} 
.layout_unit_list_ul li navigator {
    padding: 8px 0;
    font-size: 16px;
}
.layout_bottom{
   position: fixed;
    
   bottom:10px;
   right:15px;
   text-align: right;
   color:#ccc;

}
</style>
 