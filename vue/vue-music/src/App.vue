<template>
  <div id="app">
    <v-header>
      <i class="iconfont icon-meun" slot="left-icon"></i>
      <span slot="content">MUSIC</span>
      <i class="iconfont icon-username" slot="right-icon"></i>
    </v-header>
    <v-tab></v-tab>

    <keep-alive>
      <router-view />
    </keep-alive>
    
    <!-- 播放组件 -->
    <v-play></v-play>
    <!-- menu -->
    <v-sidebar></v-sidebar>

  </div>
</template>

<script>
import header from "@/components/header.vue";
import sidebar from "@/components/sidebar";
import tab from "@/components/tab.vue";
import play from "@/components/play.vue"
export default {
  components: {
    "v-header": header,
    "v-sidebar": sidebar,
    "v-tab": tab,
    "v-play": play,
  },
};
</script>

<style lang="stylus">
html, body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(122, 41, 82, 0.9);
  color: #fff;
}
</style>
