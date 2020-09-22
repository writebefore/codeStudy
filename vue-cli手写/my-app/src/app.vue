<!--
 * @Author: LHN
 * @Date: 2020-09-22 16:53:11
 * @LastEditTime: 2020-09-22 20:25:10
 * @LastEditors: LHN
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli手写\my-app\src\app.vue
-->
<template>
  <div id="id">
      This is a test
      <router-link to="/login">登录</router-link>
      <router-link to="/">首页</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
  body{
    height: 500px;
    background-color: red;
  }
</style>