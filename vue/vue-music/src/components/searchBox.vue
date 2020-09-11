<template>
  <div class="search-box">
    <i class="iconfont icon-soushuo"></i>
    <input type="text" :placeholder="placeholder" class="box" v-model="query" >
    <i class="iconfont icon-wrong icon-dismiss" v-show="query" @click="clear"></i>
  </div>
</template>

<script>
import {debounce} from '@/common/js/util.js'
export default {
  props:{
    placeholder: {
      type:String,
      default: '搜索歌手'
    }
  },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    clear(){
      this.query = ''
    },
    blur(){
      this.$refs.query.blur()
    },
    setQuery(query){
      this.query = query
    }
  },
  created() {
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 500))
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.stylus';
.search-box
  display flex
  align-items center
  width 100%
  padding 0 px2rem(8)
  box-sizing border-box
  height px2rem(74)
  background rgba(122, 41, 82, 1);
  border-radius 6px
  .iconfont
    font-size 24px
    color #6b6a6a
  .box
    flex 1
    margin 0 5px
    line-height px2rem(36)
    background rgba(122, 41, 82, 0.9);
    color #ffffff
    font-size 14px
    outline 0
  .icon-dismiss
    font-size 20px
    margin-right px2rem(10)
</style>