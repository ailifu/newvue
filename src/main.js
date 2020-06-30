import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/font/iconfont.css'

//接口请求配置文件开始
import axios from 'axios'
//配置请求根路径
axios.defaults.baseURL = 'http://119.23.53.78:8888/api/private/v1/'
Vue.prototype.$http = axios
//把这个包挂载到vue的原型上，这样的话每个vue的组件都可以通过this调用


Vue.config.productionTip = false

const app=new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
console.log(app);