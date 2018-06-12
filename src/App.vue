<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
 
  },
   onLaunch (options) {
      console.log('onLaunch',options);
   },
   onShow(options){
     console.log('onShow',options);
   },
   onHide(){
     console.log('onHide');
   },
   onError(){
     console.log('onError');
   },
   onPageNotFound(){
     console.log('onPageNotFound');
   },
   otherData:{
     msg:'test'
   }
  
  
}
</script>

<style>
page{
  height: 100%;
}
.container {
  height: 100%;
  padding:0 15px;
  font-size: 12px;
 
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
