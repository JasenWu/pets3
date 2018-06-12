<template>
  <div id="loading" >
    <img src="http://www.renjie.net.cn/pets3/img/loading4.gif" />
    <br/>
    <span>loading...</span>
  </div>
</template>

<script>
import { assetsSrc } from   "../model/index";
 console.log('mounted',assetsSrc);
export default {
  props:{
    loading:{
      type:Boolean,
      default:true,
    }
  },
  data(){
    return {
      assetsSrc:assetsSrc,//todo
    }
  },
  computed:{
    ImgSrc(){
      return assetsSrc + 'img/loading3.gif';
    }
  },
  mounted(){
   
  }
}
</script>

<style>
#loading {
 
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding-top: 50px;
  text-align: center;
}
#loading img{
   
  display:inline-block;
text-align:center;
width:20px;
height:20px;

}

</style>
