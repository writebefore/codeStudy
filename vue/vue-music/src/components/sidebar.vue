<template>
  <div class="sidebar" :class="{showSidebar: showSidebar}">
      <div class="sidebar-con" :class="{showbar: showSidebar}">
          <div class="head">
              <div class="avatar">
                  <img src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1667994205,255365672&fm=5" alt="">
              </div>
              <div class="name">LHN</div>
          </div>
          <div class="menu">
              <ul>
                  <li @click="showToast">
                      <router-link to="">
                        <i class="iconfont icon-username"></i>
                        <span>个人中心</span>
                      </router-link>
                  </li>
                  <li>
                      <router-link to="">
                        <i class="iconfont icon-username"></i>
                        <span>....</span>
                      </router-link>
                  </li>
              </ul>
          </div>
      </div>
      <div class="sidebar_mask" v-show="showSidebar" @click="setShowSidebar(false)"></div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
          
        }
    },
    computed: {
      ...mapGetters(['showSidebar'])
    },
    methods: {
      ...mapActions(['setShowSidebar']),
      showToast(){
        this.$toast('该功能暂未开放')
      },
    }
    
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function.stylus"
.sidebar 
  color #e8e8e8
  .sidebar-con 
    background #040308
    position absolute
    top 0
    left px2rem(-400px)
    transform translateZ(0)
    opacity 0
    width px2rem(350px)
    z-index 1002
    height 100%
    overflow auto
    transition all 0.3s ease

    &.showbar 
      transform translateX(px2rem(400px))
      opacity 1
    
    .head 
      text-align center
      .avatar 
        width px2rem(90px)
        height px2rem(90px)
        background #f1f1f1
        margin px2rem(60px) auto px2rem(15px)
        img 
          width 100%
          border-radius 50%
      .name 
        font-size px2rem(32px)
      
    
    .menu 
      margin-top px2rem(30px)
      ul 
        li 
          height px2rem(90px)
          line-height px2rem(90px)
          a 
            display block
            padding-left px2rem(60px)
            .icon 
              font-size px2rem(36px)
              vertical-align middle
            span 
              vertical-align middle
              font-size px2rem(24px)
              padding-left px2rem(20px)
              color #fff
          &hover 
            .icon,
            span 
              color #902444
  .sidebar_mask 
    position fixed
    width 100%
    margin 0 auto
    top 0
    left 0
    bottom 0
    right 0
    z-index 1001
    background rgba(0, 0, 0, 0.4)
</style>