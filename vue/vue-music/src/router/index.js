import Vue from "vue";
import VueRouter from "vue-router";
const search = () => import(/* webpackChunkName: "search" */ "@/views/search");

Vue.use(VueRouter);

const routes = [
  {
    name:'search',
    path:'/search',
    component: search
  }
];

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
