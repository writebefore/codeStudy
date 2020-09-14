import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 1,
};

const mutations = {
  add(state) {
    state.count ++
  },
  reduce(state) {
    state.count --
  }
};

const getters = {
    abc: (state) => {
        return state.count += 100
    }
}

const actions = { // 提交mutations的方法
  addAction(context) {
    context.commit('add')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
