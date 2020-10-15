<!--
 * @Author: LHN
 * @Date: 2020-10-14 12:56:36
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-14 13:01:02
 * @description: In User Settings Edit
 * @FilePath: \vue3-project\src\views\plan\index.vue
-->
<template>
  <div>
    <create @handlePlan="handlePlan"></create>
  </div>
</template>

<script>
import Create from './create'
export default {
  components: {
    Create
  },
  setup() {
    const handlePlan = (plan) => {
      console.log(123456,plan);
    }

    return {
      handlePlan
    }
  }
}
</script>

<style>

</style>