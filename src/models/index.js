 
 

//课程列表
export let unitList = {
  1:{  
    order:1,
    title:"Greeting and Introduction",
    src:"http://node2d-file.hep.com.cn/14f7862e3fab7e369aa61350a08183e6.mp3",
    children:{
      1:{
        
        title:"Dialog 1",
        startTime:0,
        endTime:189,
        content:{
          roles:{
            0:{
              name:'aside',//旁白
              name_zh:"旁白"
            },
            1:{
              name:'Melanie',//主角
              name_zh:"梅兰妮"
            },
            2:{
              name:'Layth',//配角
              name_zh:"蕾斯"
            }
          },

          contents:[
            {
              role:0,
              text:"Melanie Sanders brings out her photo album to show her new Egyptian friend,Layth, pictures of her family.",
              text_zh:"梅兰妮 桑德斯拿出相册，给她的埃及新朋友蕾斯看好的家庭照",
              

            },
            {
              role:1,
              text:"Oh,Layth, I'm sure you recognize . Grandmother in this picture? She's in the blue  dress.",
              text_zh:"噢，我肯定你从这张照片上认出我的奶奶了，她穿着蓝色的连衣裙。",
              
            },
            {
              role:2,
              text:"Sure, and who's that holding the hand of a boy?",
              text_zh:"当然了，那个握着男孩儿手的是谁？",
            },
            {
              role:1,
              text:" That's my older brother,Lester, with my nephew,Nicky, when he  was two years old. My sistr-in-law,Dorothy, is next to him but she's not smiling because she was angry with  Lester.Lester always leaves her and goes out of town on business.",
              text_zh:"是我的哥哥莱斯特和我的侄子尼基，尼基那时才两岁。旁边是我的嫂子多萝茜，她没笑是国为在生莱斯特的气。莱斯特总是离开她到城外去出差。",
            },
            {
              role:2,
              text:" I like this picture, It's so funny!",
              text_zh:"我喜欢这张照片，真有趣！",
            },
            {
              role:1,
              text:"Oh , it's my niece,Nicole, when she was thirteen, I remember. She was upset because Chris took her picture while she was curling her hair. You'll probably find this one funny, too. This is my great aunt, Anna Lawrence, Grandma's sister. Her hat is really out of date.",
              text_zh:"瞧，这是我的侄女尼古拉，我记得那时她13岁。她不高兴是因为克里斯在她卷头发时给她拍了照。你会发现这张也很有趣。这是我的姨奶奶安娜~劳伦斯，我奶奶的姐姐。她的帽子实在是过时了。",
            },
            {
              role:2,
              text:"Who's this skinny man?",
              text_zh:"这个瘦瘦的男人是谁？",
            },
            {
              role:1,
              text:"That's my great uncle,George Lawrence,Anna Lawrence's husband. You can tell they lived during the Depression.He's wearing boots because shoes were out of stock.",
              text_zh:"是我的姨爹爹，乔治~劳伦斯，安娜~劳伦斯的丈夫。你可以看出他们生活在大萧条时期。他穿着靴子，因为没有鞋子卖。",
            },
            {
              role:2,
              text:"I can see they're definitely from the old generation.",
              text_zh:"我看得出他们真是生活在过去年代的人。",
            },
            {
              role:1,
              text:"Here's a more recent picture showing all three generations together.Here  are Grandpa and Grandma Murphy, my mother's parents. And here are Mom and Dad, and here's my older brother, Lester, again with his wife and three of their children: Nicolas,Ryan, and Laura.  Ryan really has an outgoing personality. See how he's smiling?",
              text_zh:"这里还有更多所有三代人近些年的照片。这是墨菲外公和外婆。我妈妈的父母。这是妈妈和爸爸，这是我哥哥莱斯特和他的妻子还有三个孩子：尼古拉斯，赖恩和罗拉。赖恩性格开朗，瞧他笑的！",
            },
            {
              role:2,
              text:"Yes. He looks like he's fun to be with.You know what? I can see a strong family resemblance. Oh, who's this?",
              text_zh:"是啊，看上去和他在一起一定很开心。我想说，我可以看出你们一家人有共同的特征。咦，这是谁?",
            },
            {
              role:1,
              text:"That's Curtis Lane, Lester's brother-in-law, his wife's brother. You ought to meet this man. He really knows how to bring a person out. I wish I had his social skills.",
              text_zh:"是戈提斯~雷恩，莱斯特的大舅子，他妻子的哥哥.你应该见见这个人。他真会逗人开心。我希望我有他的社交能力。",
            },
            {
              role:2,
              text:"Who's this lady with Curtis Lane ?",
              text_zh:"和戈提斯~雷恩在一起的女士是谁？",
            },
            {
              role:1,
              text:"Does Mrs. Lane live with Lester and Dorothy?",
              text_zh:"她与莱斯 特和多萝茜住在一块吗？",
            },
            {
              role:2,
              text:"Oh, no! Lester always said he would never live with his in-laws.Well, Layth, since we're looked at all the pictures, would you like to go out and stretch your legs?",
              text_zh:"噢， 不！莱斯特总是说他决不会同她的亲戚住一起。嗳，蕾斯，既然我们把照片都看完了，你想不想出去活动活动胳膊腿儿？",
            },
            {
              role:1,
              text:"Okay! That's a good idea. But I enjoyed looking at the pictures.",
              text_zh:"好哇，好主意。可我真的很喜欢看这些照片。",
            } 
          ]
        }
      },
      2:{
        
        title:"Dialog 2",
        startTime:190,
        endTime:321,
        content:{
          roles:{
            0:{
              name:'aside',//旁白
              name_zh:"旁白"
            },
            1:{
              name:'Mr.Irving',//主角
              name_zh:"艾尔文先生"
            },
            2:{
              name:'Mrs.Schmidt',//配角
              name_zh:"舒密特先生"
            }
          },

          contents:[
            {
              role:0,
              text:"Mr.Irving, chairman of a new vocational school, is talking with Mrs. Schmidt, the school's human resources manager, about qualities needed in their personnel.",
              text_zh:"舒密特先生，既然马上就要招募员工来让我们的新学校及时运作起来，现在我们该讨论讨论我们员工应具备的素质。一个模范学校的教职工自然应该具有典型的特点。你考虑过我们应寻求什么样的特质吗？我想听听你的建议。",
            },
            {
              role:1,
              text:"Now, Mrs schmidt, it's time for us to discuss qualities needed in our personnel, since we're going to recruit some staff so that we can get our new school going in time.Naturally the staff of a model school should be representative in character.Have you thought of which traits we should be looking for? I'd like to hear your suggestions",
              text_zh:"好吧，根据心理学研究，一般来说，成功的人际关系最需要的品质是诚实、可靠、宽容、善于合作和执着；而在职业场上，有眼光、有能力、公正和守时尤其生要。",
              
            },
            {
              role:2,
              text:"Yes, according to psychological research, generally speaking, the traits most necessary for interpersonal success are honesty, dependability, tolerance, cooperativeness, and perseverance, and in the professional world particularly, vision, competency, fair-mindedness, and punctuality are important?",
              text_zh:"好吧，根据心理学研究，一般来说，成功的人际关系最需要的品质是诚实、可靠、宽容、善于合作和执着；而在职业场上，有眼光、有能力、公正和守时尤其生要。",
              
            },
            {
              role:1,
              text:"Those are good qualities that we would want in every employee. Now, perhaps we should discuss virtues needed in a director. What do you wat to tell me in this respect.",
              text_zh:"那些是我们希望每个雇员都具有的好品质。现在，我们也许应该讨论一下一个部门负责人应具备的美德。在这方面你有什么想法讲给我听？ ",
              
            },
            {
              role:2,
              text:" Some of my acquaintances have accumulated quite a lot of experience in the international  business that enables them to make valuable suggestions. So I have talked to them for this matter.",
              text_zh:"我有些熟人在国际商务方面积累了大量的经验，他们能够提供很有价值 的建议。所以，我就这个问题找他们谈过。",
              
            },
            {
              role:1,
            
              text:"Oh, have you ? What did they say",
              text_zh:"哦,是吗？他们怎么说？",
              
            },
            {
              role:2,
              text:" According to them, a desirable director is humble, diplomatic, and flexible but well-educated and experienced. He should also be concerned, and even generous.",
              text_zh:"据他们讲，一个理想的部门负责人应该谦和、圆滑、灵活、受过良好教育、有经验。他也应该关心他人，甚至是慷慨大方。",
              
            },
            {
              role:1,
            
              text:"Absolutely! Now, would you address character description for the Commercial and Industrial Arts staff? You used to operate a vocational school, so your experience must have given you many ideas.",
              text_zh:"当然！现在，你能描绘一下广告与工业艺术专业人员的特点吗？你过去开办过一个职业学校，你的经验一定让你有许我想法。",
              
            },
            {
              role:2,
              text:" In addition to those general assets, our school should seek practical leaders who are skillful and diligent. The best ones are also creative but modest, clever but humble.",
              text_zh:"除了上述那些一般品质外，我们的学校应该寻找专业技术老道、工作勤奋务实的领导干部。最佳人选要有创造性而谦虚、聪明而谦和。",
              
            },
            {
              role:1,
            
              text:" These are a number of other positions to consider.We have done good work so far. We can discuss the remaining items after lunch.",
              text_zh:"还有其它几个职位要考虑。到目前为止，我们已经谈得很不错了。午饭后，我们可以讨论下剩下的几项。",
              
            },
              
          ]
        }
      },
      3:{
        title:"Dialog 3",
        startTime:322,
        endTime:469,
        content:{
          roles:{
            0:{
              name:'aside',//旁白
              name_zh:"旁白"
            },
            1:{
              name:'Melanie',//主角
              name_zh:"梅兰妮"
            },
            2:{
              name:'Layth',//配角
              name_zh:"蕾斯"
            }
          },

          contents:[
            {
              role:0,
              text:"Melanie Sanders brings out her photo album to show her new Egyptian friend,Layth, pictures of her family.",
              text_zh:"梅兰妮 桑德斯拿出相册，给她的埃及新朋友蕾斯看好的家庭照",
              

            },
            {
              role:1,
              text:"Oh,Layth, I'm sure you recognize . Grandmother in this picture? She's in the blue  dress.",
              text_zh:"噢，我肯定你从这张照片上认出我的奶奶了，她穿着蓝色的连衣裙。",
              
            },
            {
              role:2,
              text:"Sure, and who's that holding the hand of a boy?",
              text_zh:"当然了，那个握着男孩儿手的是谁？",
            },
            {
              role:1,
              text:" That's my older brother,Lester, with my nephew,Nicky, when he  was two years old. My sistr-in-law,Dorothy, is next to him but she's not smiling because she was angry with  Lester.Lester always leaves her and goes out of town on business.",
              text_zh:"是我的哥哥莱斯特和我的侄子尼基，尼基那时才两岁。旁边是我的嫂子多萝茜，她没笑是国为在生莱斯特的气。莱斯特总是离开她到城外去出差。",
            },
            {
              role:2,
              text:" I like this picture, It's so funny!",
              text_zh:"我喜欢这张照片，真有趣！",
            },
            {
              role:1,
              text:"Oh , it's my niece,Nicole, when she was thirteen, I remember. She was upset because Chris took her picture while she was curling her hair. You'll probably find this one funny, too. This is my great aunt, Anna Lawrence, Grandma's sister. Her hat is really out of date.",
              text_zh:"瞧，这是我的侄女尼古拉，我记得那时她13岁。她不高兴是因为克里斯在她卷头发时给她拍了照。你会发现这张也很有趣。这是我的姨奶奶安娜~劳伦斯，我奶奶的姐姐。她的帽子实在是过时了。",
            },
            {
              role:2,
              text:"Who's this skinny man?",
              text_zh:"这个瘦瘦的男人是谁？",
            },
            {
              role:1,
              text:"That's my great uncle,George Lawrence,Anna Lawrence's husband. You can tell they lived during the Depression.He's wearing boots because shoes were out of stock.",
              text_zh:"是我的姨爹爹，乔治~劳伦斯，安娜~劳伦斯的丈夫。你可以看出他们生活在大萧条时期。他穿着靴子，因为没有鞋子卖。",
            },
            {
              role:2,
              text:"I can see they're definitely from the old generation.",
              text_zh:"我看得出他们真是生活在过去年代的人。",
            },
            {
              role:1,
              text:"Here's a more recent picture showing all three generations together.Here  are Grandpa and Grandma Murphy, my mother's parents. And here are Mom and Dad, and here's my older brother, Lester, again with his wife and three of their children: Nicolas,Ryan, and Laura.  Ryan really has an outgoing personality. See how he's smiling?",
              text_zh:"这里还有更多所有三代人近些年的照片。这是墨菲外公和外婆。我妈妈的父母。这是妈妈和爸爸，这是我哥哥莱斯特和他的妻子还有三个孩子：尼古拉斯，赖恩和罗拉。赖恩性格开朗，瞧他笑的！",
            },
            {
              role:2,
              text:"Yes. He looks like he's fun to be with.You know what? I can see a strong family resemblance. Oh, who's this?",
              text_zh:"是啊，看上去和他在一起一定很开心。我想说，我可以看出你们一家人有共同的特征。咦，这是谁?",
            },
            {
              role:1,
              text:"That's Curtis Lane, Lester's brother-in-law, his wife's brother. You ought to meet this man. He really knows how to bring a person out. I wish I had his social skills.",
              text_zh:"是戈提斯~雷恩，莱斯特的大舅子，他妻子的哥哥.你应该见见这个人。他真会逗人开心。我希望我有他的社交能力。",
            },
            {
              role:2,
              text:"Who's this lady with Curtis Lane ?",
              text_zh:"和戈提斯~雷恩在一起的女士是谁？",
            },
            {
              role:1,
              text:"Does Mrs. Lane live with Lester and Dorothy?",
              text_zh:"她与莱斯 特和多萝茜住在一块吗？",
            },
            {
              role:2,
              text:"Oh, no! Lester always said he would never live with his in-laws.Well, Layth, since we're looked at all the pictures, would you like to go out and stretch your legs?",
              text_zh:"噢， 不！莱斯特总是说他决不会同她的亲戚住一起。嗳，蕾斯，既然我们把照片都看完了，你想不想出去活动活动胳膊腿儿？",
            },
            {
              role:1,
              text:"Okay! That's a good idea. But I enjoyed looking at the pictures.",
              text_zh:"好哇，好主意。可我真的很喜欢看这些照片。",
            } 
          ]
        }
      },
      4:{
        title:"Dialog 4",
        startTime:470,
        endTime:553,
        children:{}
      },
      5:{
        title:"Passage",
        startTime:554,
        endTime:733,
        children:{}
      },
      6:{
        title:"Exercises A",
        startTime:734,
        endTime:810,
        children:{}
      },
      7:{
        title:"Exercises B",
        startTime:811,
        endTime:1000,
        children:{}
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

export const assetsSrc = "http://www.renjie.net.cn/pets3/";
//音频资源地址
export const audioSrc = "http://www.renjie.net.cn/pets3/audio/unit";

export const author = "Jason";

export const autoPlay = true;


 
