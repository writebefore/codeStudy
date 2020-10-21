/*
 * @Author: LHN
 * @Date: 2020-10-17 11:21:46
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-17 11:46:57
 * @description: In User Settings Edit
 * @FilePath: \helloworld\main.js
 */
import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
