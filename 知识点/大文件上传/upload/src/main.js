/*
 * @Author: LHN
 * @Date: 2020-10-26 10:16:08
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-26 10:19:51
 * @description: In User Settings Edit
 * @FilePath: \upload\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
