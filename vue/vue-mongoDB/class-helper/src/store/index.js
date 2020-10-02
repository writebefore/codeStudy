/*
 * @Author: LHN
 * @Date: 2020-10-01 10:21:51
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 11:38:25
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
})
