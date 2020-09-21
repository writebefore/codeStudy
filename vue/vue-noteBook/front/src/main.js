import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'

import util from '@/assets/js/util'

import { Swipe, SwipeItem, Icon, Field, ActionSheet, Toast, Panel, Uploader } from 'vant';
import 'vant/lib/index.css';

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Icon)
Vue.use(Field)
Vue.use(ActionSheet)
Vue.use(Toast)
Vue.use(Panel)
Vue.use(Uploader)

Vue.prototype.$http = axios
Vue.prototype.$util = util

router.beforeEach((to, from ,next) => {
  document.title = to.meta.title
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
