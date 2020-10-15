<!--
 * @Author: LHN
 * @Date: 2020-10-13 10:52:55
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-14 11:37:41
 * @description: In User Settings Edit
 * @FilePath: \vue3-demo\src\views\plan\index.vue
-->
<template>
  <div>
    <create @handle="handlePlan"></create>
  </div>
</template>

<script>
import Create from "./create";
export default {
  components: {
    Create,
  },
  setup() {
    const handlePlan = (plan) => {
      console.log(111);
      console.log(plan);
    };
    return {
      handlePlan,
    };
  },
};
</script>

<style>
</style>