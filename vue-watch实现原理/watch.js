/*
 * @Author: LHN
 * @Date: 2020-09-25 19:27:12
 * @LastEditors: LHN
 * @LastEditTime: 2020-09-25 21:04:27
 * @description: In User Settings Edit
 * @FilePath: \vue-watch实现原理\watch.js
 */

/**
 * 能独立监听某个数据的变化
 * 提供可执行函数的场所
 */

class Watcher {
  constructor(options) {
    this.$data =
      this.getBaseType(options.data) === "Object" ? options.data : {};
    this.$watch =
      this.getBaseType(options.watch) === "Object" ? options.watch : {};
    for (let key in options.data) {
      this.setData(key);
    }
  }

  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target);
    return typeStr.slice(8, -1);
  }

  setData(_key) {
    Object.defineProperty(this, _key, {
      get: function () {
        return this.$data[_key];
      },
      set: function (val) {
        const oldVal = this.$data[_key];
        if (val === oldVal) {
          return val;
        }
        this.$data[_key] = val;
        this.$watch[_key] &&
          this.getBaseType(this.$watch[_key]) === "Function" &&
          this.$watch[_key].call(this, val, oldVal);
        return val;
      },
    });
  }
}

const vm = new Watcher({
    data:{
        a:1,
        b:2,
    },
    watch:{
        a:function(newVal, oldVal){
            console.log(newVal, oldVal);
        }
    }
})

setTimeout(() => {
    vm.a = 3;
},1000)