import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/css/common.css'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:5000/api/'
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
