<!--
 * @Author: LHN
 * @Date: 2020-09-23 19:22:45
 * @LastEditors: LHN
 * @LastEditTime: 2020-09-23 19:53:00
 * @description: In User Settings Edit
 * @FilePath: \vuex原理\my-vuex\src\App.vue
-->
<template>
  <div id="app">
    {{this.$store.state.count}}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
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
