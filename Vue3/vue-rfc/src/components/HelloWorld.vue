<!--
 * @Author: LHN
 * @Date: 2020-10-23 14:52:14
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-23 15:32:51
 * @description: In User Settings Edit
 * @FilePath: \vue-rfc\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <div @touchmove="handleMove1" :style="{position:'absolute',left:x1 + 'px',top:y1 + 'px'}">1</div>
    <div @touchmove="handleMove2" :style="{position:'absolute',left:x2 + 'px',top:y2 + 'px'}">2</div>
  </div>
</template>

<script>
import useDrag from '../useDrag';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const {x:x1, y:y1, handleMove:handleMove1} = useDrag();
    const {x:x2, y:y2, handleMove:handleMove2} = useDrag();
    return {
      x1,x2,y1,y2,handleMove1,handleMove2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
