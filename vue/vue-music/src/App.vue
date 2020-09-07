<template>
  <div id="app">
    <v-header></v-header>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/header.vue'

export default {
  components: {
    'v-header': Header,
  }
};

</script>

<style lang="stylus">

</style>
