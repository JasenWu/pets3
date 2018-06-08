<template>
  <div class="container">
   <div>全国英语</div>
   <ul>
     <li v-for="(item,index) in unitList" :key="index">
      <navigator url="/pages/play/main" hover-class="navigator-hover">{{item.title}}</navigator>
      <div>{{item.des}}</div>
     </li>
   </ul>
 
  </div>
</template>

<script>
 
import {unitList} from '../../model/index'
export default {
  components: {
 
  },
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      unitList:unitList,
    }
  },
 
  methods: {
    //路转至日志页面
    toLog () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    //获取用户信息
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    //点击事件
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
 
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
