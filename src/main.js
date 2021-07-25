import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/css/common.css'

import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css'
import 'highlight.js/styles/atelier-forest-dark.css'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://47.97.155.31:5000/api/'
Vue.prototype.$http = axios

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
