<!--
 * @Author: LHN
 * @Date: 2020-10-29 11:46:30
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-30 10:59:29
 * @description: In User Settings Edit
 * @FilePath: \vue3-demo\src\components\CompDemo.vue
-->
<template>
  <ul>
    <fragment :data="[1, 2, 3, 4, 5, 6]"></fragment>
  </ul>
  <hr />
  <teleport-demo></teleport-demo>
  <hr />
  <Suspense>
    <template #default>
      <suspense-demo :timeout="3000"></suspense-demo>
    </template>
    <template #fallback> <loading></loading> </template>
  </Suspense>
</template>

<script>
import Fragment from "./Fragment.vue";
import TeleportDemo from "./teleport.vue";
import SuspenseDemo from "./suspenseDemo.vue";
import Loading from "./loading.vue";
export default {
  components: {
    Fragment,
    TeleportDemo,
    SuspenseDemo,
    Loading,
  },
};
</script>
