<template>
  <div class="header">
      <div class="header-icon" @click="menuShow">
        <slot name="left-icon"></slot>
      </div>
      <div class="header-count">
        <slot name="content"></slot>
      </div>
      <div class="header-icon">
        <slot name="right-icon"></slot>
      </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
export default {
  data() {
    return {
      
    }
  },
  methods: {
    // ...mapActions(['setShowSidebar']),
    menuShow(){
      this.$store.dispatch('setShowSidebar', true)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.stylus';
.header
  height px2rem(88)
  line-height px2rem(88)
  display flex
  justify-content space-between
  align-items center
  text-align center
  font-size px2rem(30)
  &-icon
    flex 0 0 px2rem(80)
    margin-top px2rem(6)
    .iconfont
      font-size px2rem(40)
</style>