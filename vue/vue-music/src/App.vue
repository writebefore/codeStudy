<template>
  <div id="app">
    <v-header>
      <i class="iconfont icon-meun" slot="left-icon"></i>
      <span slot="content">MUSIC</span>
      <i class="iconfont icon-username" slot="right-icon"></i>
    </v-header>
    <!-- <router-view /> -->

    <!-- menu -->
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import header from '@/components/header.vue'
import sidebar from '@/components/sidebar'
export default {
  components: {
    'v-header': header,
    'v-sidebar': sidebar, 
  }
};

</script>

<style lang="stylus">
html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(122 , 41, 82, 0.9);
  color: #fff;
}
</style>
