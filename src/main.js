import Vue from 'vue'
import App from './App'
import router from './router'
import Ydui from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
Vue.config.productionTip = false


//使用插件
Vue.use(Ydui)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
