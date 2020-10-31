<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld/>
  <hr />
  <comp-demo></comp-demo>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import CompDemo from './components/CompDemo.vue' 
export default {
  name: 'App',
  components: {
    HelloWorld,
    CompDemo
  }
}
</script>
