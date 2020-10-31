<!--
 * @Author: LHN
 * @Date: 2020-10-30 10:31:15
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-30 10:41:28
 * @description: In User Settings Edit
 * @FilePath: \vue3-demo\src\components\suspenseDemo.vue
-->
<template>
  <h1>我是一个异步组件</h1>
</template>

<script>
function sleep(timeout){
    return new Promise(reslove => setTimeout(reslove, timeout))
}

export default {
  name: "AsyncComponent",
  props:{
    timeout:{
        type:Number,
        require:true
    },
  },
  async setup(props){
    await sleep(props.timeout)
  }
};
</script>

<style></style>
