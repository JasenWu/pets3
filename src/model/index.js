//课程列表
export let unitList = [{  
  order:1,
  title:"Greeting and Introduction"
},{  
  order:2,
  title:"People"
},
{  
  order:3,
  title:"House and Family"
},
{  
  order:4,
  title:"Environment"
},
{  
  order:5,
  title:"Weather and Climate"
},
{  
  order:6,
  title:"Eating and Drinking"
},
{  
  order:7,
  title:"Food Culture"
},
{  
  order:8,
  title:"At Home"
},
{  
  order:9,
  title:"At Work"
},
{  
  order:10,
  title:"Hobbies and Interest"
},
{  
  order:11,
  title:"Entertainments and Sports"
},
{  
  order:12,
  title:"Shops and Commodities"
},
{  
  order:13,
  title:"Shopping"
},
{  
  order:14,
  title:"Holiday Festivals"
},
{  
  order:15,
  title:"Holiday Activities"
},
{  
  order:16,
  title:"Places and Locations"
},
{  
  order:17,
  title:"Travel and Tourism"
},
{  
  order:18,
  title:"Sightseeing and Travel Plans"
},
{  
  order:19,
  title:"Visit a Doctor and Health  Insurance"
},
{  
  order:20,
  title:"Bodybuilding and Environmental Sanitation"
},
{  
  order:21,
  title:"Services(1)"
},
{  
  order:22,
  title:"Services(2)"
},
{  
  order:23,
  title:"Making Friendsand Communication"
},
{  
  order:24,
  title:"Political , Legal and Social Lssuses"
},
{  
  order:25,
  title:"Work and Posts"
},
{  
  order:26,
  title:"Finding a Job"
},
{  
  order:27,
  title:"Education"
},
{  
  order:28,
  title:"Popular Science"
},
{  
  order:29,
  title:"History"
},
{  
  order:30,
  title:"Geography"
},
]

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
//音频资源地址
export const audioSrc = "http://www.renjie.net.cn/pets3/audio/unit";

export const author = "Jason";