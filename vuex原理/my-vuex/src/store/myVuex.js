/*
 * @Author: LHN
 * @Date: 2020-09-23 19:30:10
 * @LastEditors: LHN
 * @LastEditTime: 2020-09-24 16:36:02
 * @description: In User Settings Edit
 * @FilePath: \vuex原理\my-vuex\src\store\myVuex.js
 */
// Vuex 本质上是对象
// Vuex 对象有两个属性，一个是install, 一个是Store这个类
// install 方法的作用是将store这个实例挂载到所有的组件上
// Store这个类拥有commit, dispatch这些方法, Store类里面将引入的state保存成data, 作为new Vue的参数
// Store 类里面将传入的state包装成data，作为new Vue的参数
import Vue from "vue";

class Store {
  constructor(options) {
    this.vm = new Vue({
      data: {
        state: options.state,
      },
    });

    // this.state = options.state || {};

    // getters
    let getters = options.getters || {};
    this.getters = {};
    Object.keys(getters).forEach((getterName) => {
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state);
        },
        set: () => {},
      });
    });

    // mutations
    let mutations = options.mutations || {};
    this.mutations = {};
    Object.keys(mutations).forEach((mutationName) => {
      this.mutations[mutationName] = (...arg) => {
        mutations[mutationName](this.state, ...arg);
      };
    });

    // actions
    let actions = options.actions || {};
    this.actions = {}

    Object.keys(actions).forEach(actionName => {
      this.actions[actionName] = (...args) => {
        actions[actionName](this, ...args)
      }
    })
  }
  get state() {
    return this.vm.state;
  }
  commit(method,...args) {
    this.mutations[method](...args)
  }

  dispatch(method,...args) {
    this.actions[method](...args)
  }
}

let install = function(Vue) {
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        // $options ?
        console.log(this.$options, this.$options.store);
        this.$store = this.$options.store;
      } else {
        // 处理子组件
        this.$store = this.$parent && this.$parent.$store;
      }
    },
  });
};

let myVuex = {
  Store,
  install,
};

export default myVuex;
