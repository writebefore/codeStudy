<!--
 * @Author: LHN
 * @Date: 2020-10-29 11:59:05
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-29 12:06:31
 * @description: In User Settings Edit
 * @FilePath: \vue3-demo\src\components\Fragment.vue
-->
<template>
  <quick :data="left" v-if="left.length"></quick>
  <li>{{flag}}</li>
  <quick :data="right" v-if="right.length"></quick>
</template>

<script>
export default {
    name:'quick',
    props:['data'],
    setup(props, context){
        let flag = props.data[0];
        let left = [];
        let right = [];
        props.data.slice(1).forEach(v => {
            v > flag ? right.push(v) : left.push(v);
        });
        return { left, right, flag }
    }
}
</script>

<style>

</style>