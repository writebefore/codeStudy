/*
 * @Author: LHN
 * @Date: 2020-09-22 19:16:04
 * @LastEditTime: 2020-09-22 19:32:00
 * @LastEditors: LHN
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli手写\my-app\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes:[
        {
            name:'home',
            path:'/',
            component: Home,
        },
        {
            name:'login',
            path:'/login',
            component: Login,
        },
    ]
})

export default router