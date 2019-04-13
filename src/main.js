import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

/**插件和全局对象设置 */
Vue.use(ElementUI)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/**创建全局过滤器 */
Vue.filter('date',(value)=>{
  var date = new Date(value)
  var y = date.getFullYear()
  var m = date.getMonth()+1
  var d = date.getDate()
  m = m<10?'0'+m:m
  d = d<10?'0'+d:d
  return `${y}-${m}-${d}`
})
Vue.filter('dateTime',(value)=>{
  var date = new Date(value)
  var y = date.getFullYear()
  var m = date.getMonth()+1
  var d = date.getDate()
  var h = date.getHours()
  var f = date.getMinutes()
  var s = date.getSeconds()
  m = m<10?'0'+m:m
  d = d<10?'0'+d:d
  h = h<10?'0'+h:h
  f = f<10?'0'+f:f
  s = s<10?'0'+s:s
  return `${y}-${m}-${d} ${h}:${f}:${s}`
})
Vue.filter('currency',(value)=>{
  return '¥'+value.toFixed(2)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
