// import Vue from "vue";
// import App from "./App.vue";

// let app = new Vue({
//   render: h(App),
// })

import {createApp} from './app.js';
let { app } = createApp();

app.mount('#app')

// 同构 一份在服务端运行 也可以在客户端运行