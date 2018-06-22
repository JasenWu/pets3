 
 

//课程列表
export let unitList = {
  1:{  
    order:1,
    title:"Greeting and Introduction",
    children:{
      1:{
        title:"Dialog",
        startTime:0,
        endTime:189,
        
      },
      2:{
        title:"Dialog",
        startTime:190,
        endTime:321, 
      },
      3:{
        title:"Monologue",
        startTime:322,
        endTime:469,
         
      },
      4:{
        title:"Monologue",
        startTime:470,
        endTime:553,
       
      },
      5:{
        title:"Passage",
        startTime:554,
        endTime:733,
       
      }
    }
  },
  2:{  
    order:2,
    title:"People",
    children:[] 
  },
  3:{  
    order:3,
    title:"House and Family",
    children:[]
  },
  4:{  
    order:4,
    title:"Environment",
    children:[]
  },
  5:{  
    order:5,
    title:"Weather and Climate",
    children:[]
  },
  6:{  
    order:6,
    title:"Eating and Drinking",
    children:[]
  },
  7:{  
    order:7,
    title:"Food Culture",
    children:[]
  },
  8:{  
    order:8,
    title:"At Home",
    children:[]
  },
  9:{  
    order:9,
    title:"At Work",
    children:[]
  },
  10:{  
    order:10,
    title:"Hobbies and Interest",
    children:[]
  },
  11:{  
    order:11,
    title:"Entertainments and Sports",
    children:[]
  },
  12:{  
    order:12,
    title:"Shops and Commodities",
    children:[]
  },
  13:{  
    order:13,
    title:"Shopping",
    children:[]
  },
  14:{  
    order:14,
    title:"Holiday Festivals",
    children:[]
  },
  15:{  
    order:15,
    title:"Holiday Activities",
    children:[]
  },
  16:{  
    order:16,
    title:"Places and Locations",
    children:[]
  },
  17:{  
    order:17,
    title:"Travel and Tourism",
    children:[]
  },
  18:{  
    order:18,
    title:"Sightseeing and Travel Plans",
    children:[]
  },
  19:{  
    order:19,
    title:"Visit a Doctor and Health  Insurance",
    children:[]
  },
  20:{  
    order:20,
    title:"Bodybuilding and Environmental Sanitation",
    children:[]
  },
  21:{  
    order:21,
    title:"Services(1)",
    children:[]
  },
  22:{  
    order:22,
    title:"Services(2)",
    children:[]
  },
  23:{  
    order:23,
    title:"Making Friendsand Communication",
    children:[]
  },
  24:{  
    order:24,
    title:"Political , Legal and Social Lssuses",
    children:[]
  },
  25:{  
    order:25,
    title:"Work and Posts",
    children:[]
  },
  26:{  
    order:26,
    title:"Finding a Job",
    children:[]
  },
  27:{  
    order:27,
    title:"Education",
    children:[]
  },
  28:{  
    order:28,
    title:"Popular Science",
    children:[]
  },
  29:{  
    order:29,
    title:"History",
    children:[]
  },
  30:{  
    order:30,
    title:"Geography",
    children:[]
  },
}

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


 
