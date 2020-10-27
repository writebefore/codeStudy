<!--
 * @Author: LHN
 * @Date: 2020-10-23 14:52:14
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-23 15:14:46
 * @description: In User Settings Edit
 * @FilePath: \vue-rfc\src\App.vue
-->
<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
