import Vue from 'vue'
import VueRouter from 'vue-router'
import StarNotes from '@/views/StarNotes.vue'

Vue.use(VueRouter)

const routes = [
  {
    name:"starNotes",
    path:'/',
    component: StarNotes,
    meta: {
      title:"笨比日记"
    }
  },
  {
    name:'starBanner',
    path:'/StarBanner',
    component: () => import(/* webpackChunkName: 'StarBanner' */ '@/views/StarBanner.vue'),
    meta: {
      title:"导航页"
    }
  },
  {
    name:'starLogin',
    path:'/StarLogin',
    component: () => import(/* webpackChunkName: 'StarLogin' */ '@/views/StarLogin.vue'),
    meta: {
      title:"登录"
    }
  },
  {
    name:'starRegister',
    path:'/StarRegister',
    component: () => import(/* webpackChunkName: 'StarRegister' */ '@/views/StarRegister'),
    meta:{
      title:"注册"
    }
  },
  {
    name:'noteClass',
    path:'/NoteClass',
    component: () => import(/* webpackChunkName: 'NoteClass' */ '@/views/NoteClass'),
    meta:{
      title:"笨比类别"
    }
  },
  {
    name:"noteList",
    path:'/noteList',
    component: () => import(/* webpackChunkName: 'NoteList' */ '@/views/NoteList'),
    meta:{
      title:"笨比列表"
    }
  },
  {
    name:'noteDetail',
    path:'/noteDetail',
    component: () => import(/* webpackChunkName: 'NoteDetail' */ '@/views/NoteDetail'),
    meta:{
      title:"笨比详情"
    }
  },
  {
    name:'addNote',
    path:'/addNote',
    component: () => import(/* webpackChunkName: 'AddNote' */ '@/views/AddNote'),
    meta:{
      title:"笨比日记"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
