<template>
  <div class="container" >
    
 
    <audio :src="url" controls="true" ></audio>
 
  </div>
</template>

<script>
 
 

export default {
  components: {
 
  },
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      unit:0,//单元号,
      url:"../../static/audio/unit01.mp3",
    }
  },

  methods: {
    
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
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

  },

  mounted () {
    // 调用应用实例的方法获取全局数据
    //this.getUserInfo()

    this.unit = parseInt(this.$root.$mp.query.unit);
    let unit = this.unit;
    this.url = `http://www.renjie.net.cn/test/audio/unit${unit}.mp3`
    console.log('unit',unit);


    
      
  }
}
</script>

<style scoped>
.container{
 
 
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
