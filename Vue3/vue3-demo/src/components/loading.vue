<!--
 * @Author: LHN
 * @Date: 2020-10-30 10:49:45
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-30 11:01:59
 * @description: In User Settings Edit
 * @FilePath: \vue3-demo\src\components\loading.vue
-->
<template>
  <h1>加载中{{ loading }}</h1>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    let loading = ref("");
    let i = 0;
    let arr = [".", "..", "..."];
    let timer = setInterval(() => {
      loading.value = arr[i];
      i = ++ i % 3;
    }, 350);
    onUnmounted(() => {
        clearInterval(timer)
    })
    return {
        loading
    }
  },
};
</script>

<style></style>
