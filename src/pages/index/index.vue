<template>
  <div class="container">
    <div class="layout_title">全国英语等级考试标准教程（全新版）第三级</div>

    <div class="layout_des">
      <span class="layout_des_belong">所属图书:</span>
      <span class="layout_des_parent">全国英语等级考试标准教程（全新版）第三级</span>
    </div>
    <ul class="layout_unit_list_ul">
      <li v-for="(item,index) in unitList" :key="index">

        <navigator :url="'/pages/content-list/main?unit='+item.order" hover-class="navigator-hover">Unit {{item.order}}&nbsp;{{item.title}}</navigator>

      </li>
    </ul>

    <div class="layout_bottom">
      <span>阅读:{{count}}</span>

    </div>

  </div>
</template>

<script>
import { assetsSrc, loadingConfig } from "@models/index";

export default {
  components: {},
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
      unitList: {},
      count: 999
    };
  },

  methods: {
    //路转至日志页面
    toLog() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    onGotUserInfo(info) {
      alert(info);
      console.log("userinfo");
    },

    //点击事件
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    },
    getCount() {
      wx.request({
        url: `${assetsSrc}api/RestController.php`, //仅为示例，并非真实的接口地址
        data: {
          req: "readed"
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        success: res => {
           
          if(!res || !res.data.data) {return false;}//没有返回就不再执行下面的代码
          let count = parseInt(res.data.data[0].count);
          this.count = count;
          count = count + 1;
          //增加一个
          wx.request({
            url: `${assetsSrc}api/RestController.php`, //仅为示例，并非真实的接口地址
            method: "POST",
            data: {
              req: "readed",
              type: "update",
              params: {
                count: count
              }
            },
            header: {
              "content-type": "application/json" // 默认值
            },
            success: res => {
              console.log("res", res);
            }
          });
        }
      });
    },
    getList() {
      wx.showLoading(loadingConfig);

      wx.request({
        url: `${assetsSrc}contentData/unitList.json`, //仅为示例，并非真实的接口地址
        data: {},
        header: {
          "content-type": "application/json" // 默认值
        },
        success: res => {
          console.log("res", res);
          if (!res.data) {
            console.log("无数据退出");
          }
          let unitList = res.data;
          this.unitList = unitList;
          wx.hideLoading();
        },
        fail: res => {
          console.log("fail", res);
        }
      });
    }
  },

  mounted() {
    this.getList();//章节列表
    this.getCount(); //获取已读数据
  }
};
</script>

<style scoped lang="less">
.layout_title {
  font-size: 16px;
  border-bottom: 1px solid #eee;
  text-align: left;
  padding: 10px 0;
}

.layout_des {
  padding: 10px 0;
}
.layout_des .layout_des_belong {
  color: #ccc;
}
.layout_des .layout_des_parent {
  color: #18b4ed;
}

.layout_unit_list_ul {
  color: #18b4ed;
  li {
    navigator {
      display: block;
      padding: 8px 0;
      font-size: 16px;
    }
  }
}

.layout_bottom {
  position: fixed;

  bottom: 10px;
  right: 15px;
  text-align: right;
  color: #ccc;
}
</style>
 
