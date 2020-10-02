<!--
 * @Author: LHN
 * @Date: 2020-10-02 16:25:32
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 16:28:17
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper\src\views\home\home.vue
-->
<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/home/substitute" icon="shop">代课</van-tabbar-item>
    <van-tabbar-item to="/home/publish" icon="edit">发布</van-tabbar-item>
    <van-tabbar-item to="/home/course" icon="records">课程</van-tabbar-item>
    <van-tabbar-item to="/home/mine" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        }
    },
};
</script>

<style>
</style>