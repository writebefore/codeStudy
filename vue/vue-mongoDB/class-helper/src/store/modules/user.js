/*
 * @Author: LHN
 * @Date: 2020-10-02 11:37:59
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 11:43:18
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper\src\store\modules\user.js
 */
const state = {
    user:{}
}

const getters = {
    user: state => state.user
}

const mutations = {
    SET_USER: (state, arg) => {
        state.user = arg
    }
}

const actions = {
    setUserInfo ( {commit }, arg ) {
        commit('SET_USER', arg)
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}