<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
     console.log('created');
 
  },
   onLaunch (options) {
      console.log('onLaunch',options);
   },
   onReady(){
      console.log('onReady');
   },
   onError(){
     console.log('onError');
   },
   onPageNotFound(){
     console.log('onPageNotFound');
   },
   onShareAppMessage(res){
     console.log('res',res);
     if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '',
      path: ''
    }
   }
   
  
  
}
</script>

<style>
page{
  height: 100%;
}
.container {
  
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
