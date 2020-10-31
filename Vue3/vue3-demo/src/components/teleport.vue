<!--
 * @Author: LHN
 * @Date: 2020-10-30 10:14:53
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-30 10:27:14
 * @description: In User Settings Edit
 * @FilePath: \vue3-demo\src\components\teleport.vue
-->
<template>
  <div class="confirm-modal">
    <button>打开</button>
    <Teleport to="#foot-container">
      <div v-if="isOpen">
        <p>底部信息</p>
        <button @click="isOpen = false">取消</button>
      </div>
    </Teleport>
  </div>
</template>

<script>
import {ref} from "vue"
export default {
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
    };
  },
};
</script>

<style></style>
