 
  

//时间格式化
export const timeFormat = (timestamp) => {
  var date = new Date(parseInt(timestamp) * 1000);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minite = date.getMinutes().toString();
  minite = minite.length === 1 ? '0' + minite :minite;
  var second = date.getSeconds().toString();
  second = second.length === 1 ? '0' + second : second;
  return minite + ":" + second;
}
//资源地址
export const assetsSrc = "https://www.renjie.net.cn/pets3/";

export const author = "Jason";

export const autoPlay = true;

export const loadingConfig = {
  title:"加载中...",
  mask:true
}


 
