/*
 * @Author: LHN
 * @Date: 2020-10-01 10:21:51
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-01 16:22:04
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './static/clear-default.css'
import 'vant/lib/index.css';
import api from './axios/index'

import { Button, Cell, CellGroup, Field, Col, Row } from 'vant';
//按需引入
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Col);
Vue.use(Row);
Vue.use(api)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
