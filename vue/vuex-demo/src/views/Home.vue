<template>
  <div class="home">
      首页
      <home-child></home-child>
  </div>
</template>

<script>
import HomeChild from '@/components/HomeChild';
export default {
    name: 'home',
    components: {
        HomeChild,
    }
}
</script>

<style>

</style>