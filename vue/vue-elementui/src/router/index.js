import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import User from '@/views/User'
import User2 from '@/views/User2'

Vue.use(VueRouter)

  const routes = [
  {
    name:'login',
    path:'/',
    component:Login
  },
  {
    name:'home',
    path:'/home',
    component:Home,
    children:[
      {
        path:'user',
        component:User,
        name:'user'
      },
      {
        path:'user2',
        component:User2,
        name:'user2'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
