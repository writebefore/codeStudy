/*
 * @Author: LHN
 * @Date: 2020-10-16 10:25:29
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-16 11:04:24
 * @description: In User Settings Edit
 * @FilePath: \vue-ssr\src\app.js
 */
import Vue from 'vue'
import App from './App.vue';

import { createRouter } from './router/index.js'

export function createApp(){
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return {app, router}
}

// 服务器端渲染

