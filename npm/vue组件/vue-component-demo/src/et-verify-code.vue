<!--
 * @Author: LHN
 * @Date: 2020-09-21 14:56:16
 * @LastEditTime: 2020-09-21 17:08:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue组件\vue-component-demo\src\et-verify-code.vue
-->
<template>
  <div class="vcWrap">
    <input v-for="n in len" :key="'codeInput' + n" :ref="'codeInput' + n" v-model.trim.number="code[n-1]" @keydown="onKeydown(n)" @keyup="onKeyup(n)" />
  </div>
</template>

<script>
export default {
  name: "EtVerifyCode",
  props: ["length"],
  data() {
    return {
      len: this.length || 4,
      code: new Array(this.len),
      keyCodes: [8, 13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99],
    };
  },
  methods: {
onkeydown(n) {
      if (!this.keyCodes.includes(event.keyCode)) {
        event.returnValue = false
      } else if (event.keyCode === 8 && n > 1 && this.code[n-1] === '') {
        this.$refs['codeInput'+(n-1)][0].focus()
        event.returnValue = false
      }
    },
    onkeyup(n) {
      if ((event.keyCode >= 48 && event.keyCode <=57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
        this.$set(this.code, n - 1, event.key)
        if (n < this.len) this.$refs['codeInput'+(n + 1)][0].focus() 

        this.$emit('sendCodeInput', this.code.join(''))
      } else if (event.keyCode === 8) {
        this.$emit('sendCodeInput', this.code.join(''))
      } else if (event.keyCode === 13) {
        if (this.code.join('').length === this.len) this.$emit('goNext')
      }
    }
  },
};
</script>

<style lang="stylus">
.vcWrap {
  input {
    width: 40px;
    height: 40px;
    line-height: 40px;
    -webkit-appearance: none;
    // background-color: #fff;
    // background-image: none;
    // border: 1px solid #dcdfe6;
    background-color: #f7f9fa;
    border: 1px solid #f7f9fa;
    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    padding: 0 14px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 4px;
    margin-right: 1em;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>