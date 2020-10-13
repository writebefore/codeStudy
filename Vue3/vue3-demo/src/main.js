/*
 * @Author: LHN
 * @Date: 2020-10-13 10:12:04
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-13 10:43:47
 * @description: In User Settings Edit
 * @FilePath: \vue3-demo\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(store).use(router).use(Antd).mount('#app')
