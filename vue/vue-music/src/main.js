import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/static/css/reset.stylus'
import '@/static/css/plugin.stylus'

Vue.config.productionTip = false

import { Toast } from '@/common/js/plugin.js'
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
