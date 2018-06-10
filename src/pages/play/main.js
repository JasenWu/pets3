import Vue from 'vue'
import App from './index'
console.log('App',App);

const app = new Vue(App)
app.MusicStart = function(){
  console.log('MusicStart');
}
app.$mount()
export default {
  config: {
    navigationBarTitleText: 'app.details.title'
  },
 
  
}
