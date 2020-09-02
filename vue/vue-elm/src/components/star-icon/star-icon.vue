<template>
  <div class="stars">
    <span v-for="(item, index) in starList" :key="index"
     :class="[`star-${size}`,`${item}`]" class="star"></span>
  </div>
</template>

<script>
export default {
  name: 'star-icon',
  props: {
    size: {
      type: String,
      default() {
        return 'small';
      },
    },
    score: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    starList() {
      const res = [];
      const { score } = this;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 5; i++) {
        if (score >= i + 0.5 && score < i + 1) {
          res.push('half');
        } else if (score >= i + 1) {
          res.push('on');
        } else {
          res.push('off');
        }
      }
      // eslint-disable-next-line no-console
      console.log(res);
      return res;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.stylus';
@import '../../common/stylus/mixin.stylus';
  .stars
    display inline-flex
    justify-content space-around
    .star
      display inline-block
      background-repeat no-repeat
      text-align center
    .star-mini
      width 12px
      height 12px
      background-size 12px 12px
      &.on
        bg-image('star24_on')
      &.half
        bg-image('star24_half')
      &.off
        bg-image('star24_off')
    .star-small
      width 24px
      height 24px
      background-size 24px 24px
      &.on
        bg-image('star24_on')
      &.half
        bg-image('star24_half')
      &.off
        bg-image('star24_off')
    .star-normal
      width 36px
      height 36px
      background-size 36px 36px
      &._on
        bg-image('star36_on')
      &.half
        bg-image('star36_half')
      &.off
        bg-image('star36_off')
    .star-large
      width 48px
      height 48px
      background-size 48px 48px
      &._on
        bg-image('star48_on')
      &.half
        bg-image('star48_half')
      &.off
        bg-image('star48_off')
</style>
