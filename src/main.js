import Vue from 'vue'
import App from './App'
 

import './assets/iconfont/iconfont.css';

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main','pages/content-list/main', 'pages/play/main', 'pages/logs/main','pages/recorder/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Pets 3 Study',
      navigationBarTextStyle: 'black'
    },
    // tabBar: {
    //   "list": [{
    //     "pagePath": "pages/index/main",
    //     "text": "首页"
    //   }, {
    //     "pagePath": "pages/logs/main",
    //     "text": "日志"
    //   }]
    // },
    // networkTimeout: {
    //   "request": 10000,
    //   "downloadFile": 10000
    // },
    // debug: true
  },

  
}
