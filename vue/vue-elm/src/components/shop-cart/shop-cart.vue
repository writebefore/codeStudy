<template>
  <div class="shop-cart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight' : totalCount > 0}">
            <i class="icon-shopping_cart" :class="{'highlight' : totalCount > 0}"></i>
          </div>
          <div class="num">
            <span class="bubble" v-show="totalCount > 0">{{totalCount}}</span>
          </div>
        </div>
        <div class="price">¥{{totalPrice}}</div>
          <div class="desc">另需配送费 ¥{{deliveryPrice}} 元</div>
      </div>
      <div class="content-right" @click="showPrice">
        <div class="pay"
        :class="payClass">
            {{payDesc}}
        </div>
      </div>
    </div>
    <div class="ball-container">
      <div v-for="(ball, index) in balls" :key="index">
        <transition @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
          <div class="ball" v-show="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [];
      },
    },
    deliveryPrice: {
      type: Number,
    },
    minPrice: {
      type: Number,
    },
  },
  data() {
    return {
      balls: [
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false },
      ],
      // 正在下落的球
      dropBalls: [],
    };
  },
  computed: {
    totalCount() {
      let count = 0;
      this.selectFoods.forEach((food) => {
        count += food.count;
      });
      return count;
    },
    totalPrice() {
      let pay = 0;
      this.selectFoods.forEach((food) => {
        pay += food.price * food.count;
      });
      return pay;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return `¥${this.minPrice}元起送`;
      } if (this.totalPrice < this.minPrice) {
        const diff = this.minPrice - this.totalPrice;
        return `还差¥${diff}元起送`;
      }
      return '去结算';
    },
    payClass() {
      if (!this.totalCount || this.totalPrice < this.minPrice) {
        return 'not-enough';
      }
      return 'enough';
    },
  },
  methods: {
    showPrice() {
      if (this.totalPrice >= this.minPrice) {
        this.$createDialog({
          type: 'alert',
          title: '应该支付',
          content: `${this.totalPrice + this.deliveryPrice}元`,
        }).show();
      }
    },
    drop(el) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i];
        if (!ball.show) {
          ball.show = true;
          ball.el = el;
          this.dropBalls.push(ball);
          return;
        }
      }
    },
    beforeDrop(el) {
      let count = this.balls.length;
      // eslint-disable-next-line no-plusplus
      while (count--) {
        const ball = this.dropBalls[this.dropBalls.length - 1];
        if (ball.show) {
          const rect = ball.el.getBoundingClientRect();
          // console.log(rect)
          const x = rect.left - 32;
          const y = -(window.innerHeight - rect.top - 22);
          // eslint-disable-next-line no-param-reassign
          el.style.display = '';
          // eslint-disable-next-line no-param-reassign
          el.style.webkitTransform = `translate3d(0, ${y}px, 0)`;
          // eslint-disable-next-line no-param-reassign
          el.style.transform = `translate3d(0, ${y}px, 0)`;
          const inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`;
          inner.style.transform = `translate3d(${x}px, 0, 0)`;
        }
      }
    },
    dropping(el, done) {
      // console.log(el, done)
      this.$nextTick(() => {
        // eslint-disable-next-line no-param-reassign
        el.style.webkitTransform = 'translate3d(0, 0, 0)';
        // eslint-disable-next-line no-param-reassign
        el.style.transform = 'translate3d(0, 0, 0)';
        const inner = el.getElementsByClassName('inner-hook')[0];
        inner.style.webkitTransform = 'translate3d(0, 0, 0)';
        inner.style.transform = 'translate3d(0, 0, 0)';
        el.addEventListener('transitionend', done);
      });
    },
    afterDrop(el) {
      const ball = this.dropBalls.shift();
      if (ball) {
        ball.show = false;
        // eslint-disable-next-line no-param-reassign
        el.style.display = 'none';
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.stylus';
  .shop-cart
    height: 100%
    .content
      display: flex
      background: $color-background
      font-size: 0
      color: $color-light-grey
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: $color-background
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: $color-dark-grey
            &.highlight
              background: $color-blue
            .icon-shopping_cart
              line-height: 44px
              font-size: $fontsize-large-xxx
              color: $color-light-grey
              &.highlight
                color: $color-white
          .num
            position: absolute
            top: 0
            right: 0
            .bubble
              display inline-block
              padding 0 5px
              height 16px
              line-height 16px
              text-align center
              border-radius 16px
              font-family Helvetica
              font-weight 700
              font-size $fontsize-small-s
              color $color-white
              background $color-red
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-weight: 700
          font-size: $fontsize-large
          &.highlight
            color: $color-white
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: $fontsize-small-s
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-weight: 700
          font-size: $fontsize-small
          &.not-enough
            background: $color-dark-grey
          &.enough
            background: $color-green
            color: $color-white
    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background: $color-blue
          transition: all 0.4s linear
</style>
