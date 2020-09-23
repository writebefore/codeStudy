/*
 * @Author: LHN
 * @Date: 2020-09-23 19:30:10
 * @LastEditors: LHN
 * @LastEditTime: 2020-09-23 21:33:27
 * @description: In User Settings Edit
 * @FilePath: \vuex原理\my-vuex\src\store\myVuex.js
 */
// Vuex 本质上是对象
// Vuex 对象有两个属性，一个是install, 一个是Store这个类
// install 方法的作用是将store这个实例挂载到所有的组件上
// Store这个类拥有commit, dispatch这些方法, Store类里面将引入的state保存成data, 作为new Vue的参数
// Store 类里面将传入的state包装成data，作为new Vue的参数
import Vue from 'vue'

class Store {
  constructor(options) {
    this.vm = new Vue({
      data: {
        state: options.state,
      },
    });

    // this.state = options.state || {};
  }
  get state() {
    return this.vm.state;
  }
}

let install = function(Vue) {
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        // $options ?
        this.$store = this.$options.store;
        console.log(this.$store);
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
