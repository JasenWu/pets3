 
  

//时间格式化
export const timeFormat = (timestamp) => {
  var date = new Date(parseInt(timestamp) * 1000);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minite = date.getMinutes().toString().padStart(2,'0');
  var second = date.getSeconds().toString().padStart(2,'0');
  return minite + ":" + second;
}

export const assetsSrc = "https://www.renjie.net.cn/pets3";
//音频资源地址
export const audioSrc = "https://www.renjie.net.cn/pets3/audio/unit";

export const author = "Jason";

export const autoPlay = true;


 
