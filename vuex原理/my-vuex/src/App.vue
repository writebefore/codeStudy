<!--
 * @Author: LHN
 * @Date: 2020-09-23 19:22:45
 * @LastEditors: LHN
 * @LastEditTime: 2020-09-24 16:24:02
 * @description: In User Settings Edit
 * @FilePath: \vuex原理\my-vuex\src\App.vue
-->
<template>
  <div id="app">
    {{this.$store.getters.getCount}}
    <button @click="add">+1</button>
    <button @click="reduce">-1</button>
    <br>
    <button @click="testAction">-2</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    add(){
      this.$store.commit('addCount', 1)
    },
    reduce(){
      this.$store.commit('reduceCount',1)
    },
    testAction(){
      this.$store.dispatch('getReduceCount', 2)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
