/*
 * @Author: LHN
 * @Date: 2020-10-17 11:41:25
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-17 11:47:55
 * @description: In User Settings Edit
 * @FilePath: \helloworld\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      a: 1
  },
  getters:{
      getA: state => state.a
  },
  mutations: {},
  actions: {},
  modules: {},
});
