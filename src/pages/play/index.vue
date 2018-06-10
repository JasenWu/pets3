<template>
  <div class="container" >
    
    <div class="layout_title">Unit {{details.unit}}   {{details.title}}</div>
    <audio :src="details.url" controls="true" ></audio>
 
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
      details: {
        title: "",
        unit: 0, //单元号,
        url: ""
      },
      unitList: unitList
    };
  },

  methods: {
   
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
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
    }
  },

  mounted() {
    // 调用应用实例的方法获取全局数据
    //this.getUserInfo()

    this.details.unit = parseInt(this.$root.$mp.query.unit);
    let unit = this.details.unit;
    this.details.url = `http://www.renjie.net.cn/test/audio/unit${unit}.mp3`;
    this.details.title = unitList[unit - 1].title;
 
  }
};
</script>

<style scoped>
.layout_title {
  font-size: 16px;
  padding-bottom: 10px;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
  background: red;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
</style>
