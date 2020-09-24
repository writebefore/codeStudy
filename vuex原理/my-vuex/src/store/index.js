/*
 * @Author: LHN
 * @Date: 2020-09-23 19:22:46
 * @LastEditors: LHN
 * @LastEditTime: 2020-09-24 16:25:01
 * @description: In User Settings Edit
 * @FilePath: \vuex原理\my-vuex\src\store\index.js
 */
import Vue from "vue";
import Vuex from "./myVuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    getCount: (state) => {
      return state.count * 100;
    },
  },
  mutations: {
    addCount(state, num) {
      state.count += num;
    },
    reduceCount(state, num){
      state.count -= num;
    }
  },
  actions: {
    getReduceCount(context, num) {
      context.commit('reduceCount', num)
    }
  },
  modules: {},
});
