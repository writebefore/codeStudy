<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapper clear-fix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
                <!-- 星星 -->
                <star-icon size="small" :score="seller.score" style="width:200px;"></star-icon>
            </div>
            <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
            </div>
            <ul class="supports">
                <li v-for="(item, index) in seller.supports" :key="index" class="supports-item">
                  <support-ico :size=2 :type="item.type"></support-ico>
                  <span class="text">{{item.description}}</span>
                </li>
            </ul>
            <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
            </div>
            <div class="bulletin">
                <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
      </div>
      <div class="detail-close" @click="hideDetail" >
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
// eslint-disable-next-line import/extensions
import SupportIco from '@/components/support-ico/support-ico';
// eslint-disable-next-line import/extensions
import StarIcon from '@/components/star-icon/star-icon';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SupportIco,
    // eslint-disable-next-line vue/no-unused-components
    StarIcon,
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {
        };
      },
    },
  },
  data() {
    return {
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    hideDetail(e, data) {
      this.$emit('hiddenDetail', { detailVisible: false });
      // eslint-disable-next-line no-console
      e.stopPropagation();
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.stylus'
  .header-detail
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    z-index 100
    overflow auto
    backdrop-filter blur(10px)
    opacity 1
    color $color-white
    background $color-background-s
    &.fade-enter, &.fade-leave-to
      opacity 0
      background $color-background
    &.fade-enter-active, &.fade-leave-active
      transition all 0.5s
    .detail-wrapper
      display inline-block
      width 100%
      min-height 100%
      .detail-main
        margin-top 64px
        padding-bottom 64px
        .name
          line-height 16px
          text-align center
          font-size $fontsize-large
          font-weight 700
        .star-wrapper
          margin-top 18px
          padding 2px 0
          text-align center
        .title
          display flex
          width 80%
          margin 28px auto 24px auto
          align-items center
          .line
            flex 1
            position relative
            border-bottom 1px solid rgba(255, 255, 255, 0.2)
          .text
            padding 0 12px
            font-weight 700
            font-size $fontsize-medium
        .supports
          width 80%
          margin 0 auto
          &-item
            display flex
            align-items center
            padding 0 12px
            margin-bottom 12px
            &:last-child
              margin-bottom 0
            .text
              line-height 16px
              font-size $fontsize-small
              margin-left 6px
        .bulletin
          width 80%
          margin 0 auto
          line-height 24px
          font-size $fontsize-small
    .detail-close
      position relative
      width 30px
      height 30px
      margin -64px auto 0 auto
      font-size $fontsize-large-xxxx
      clear both
</style>
