/*
 * @Author: LHN
 * @Date: 2020-10-01 10:21:51
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 16:26:43
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login',
  },
  {
    name:'login',
    path:'/login',
    component:Login,
  },
  {
    name:'home',
    path:'/home',
    component: () => import('../views/home/home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
