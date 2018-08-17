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
import { getList, getCount, updateCount } from "@models/api";

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
 
    getCount() {
      getCount({ req: "readed" }).then(res => {
        let count = parseInt(res.data.data[0].count);
        this.count = count;
        count = count + 1;
        updateCount({
          req: "readed",
          type: "update",
          params: {
            count: count
          }
        }).then(res => {});
      });
    },
    getList() {
      getList().then(res => {
        let unitList = res.data;
        this.unitList = unitList;
      });
    }
  },

  mounted() {
    this.getList(); //章节列表
    this.getCount(); //获取已读数据
    wx.showShareMenu({
      withShareTicket: true
    });
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
 
