/*
 * @Author: your name
 * @Date: 2020-09-21 16:12:54
 * @LastEditTime: 2020-09-21 19:45:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue组件\use-component-demo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import EtVerifyCode from 'wn-verify-code';
Vue.config.productionTip = false

Vue.use(EtVerifyCode)

new Vue({
  render: h => h(App),
}).$mount('#app')
