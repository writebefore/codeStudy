/*
 * @Author: LHN
 * @Date: 2020-09-22 14:55:19
 * @LastEditTime: 2020-09-22 19:27:42
 * @LastEditors: LHN
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli手写\my-app\src\index.js
 */
import Vue from "vue";
import App from "./app.vue";
import router from "./router";

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
