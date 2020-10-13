/*
 * @Author: LHN
 * @Date: 2020-10-13 10:12:04
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-13 10:57:08
 * @description: In User Settings Edit
 * @FilePath: \vue3-demo\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home'
const routes = [
  {
    name:'home',
    path:'/',
    component: Home
  },
  {
    name:'plan',
    path:'/plan',
    component: () => import('@/views/plan')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
