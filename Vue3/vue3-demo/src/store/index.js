/*
 * @Author: LHN
 * @Date: 2020-10-13 10:12:04
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-14 10:22:40
 * @description: In User Settings Edit
 * @FilePath: \vue3-demo\src\store\index.js
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    allTimes:0
  },
  getters: {
    allTimes: (state) => state.allTimes
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
