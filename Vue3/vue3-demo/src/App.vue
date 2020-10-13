<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/">
          <router-link to="/">首页</router-link>
        </a-menu-item>
        <a-menu-item key="/plan">
          <router-link to="/plan">计划</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      {{num}}
    </a-layout-footer>
  </a-layout>
</template>

<script>
// composition api
// eslint-disable-next-line no-unused-vars
import { reactive, toRefs, watch, computed } from 'vue';
import { useRouter } from 'vue-router'
export default {
    // eslint-disable-next-line no-unused-vars
    setup (props, context) { // 入口函数 默认只执行一次 里面没有this
        const state = reactive({
            selectedKeys: [],
            num: 1,
        })
        // toRefs(state) // 保证数据是响应式的
        setInterval(() =>{
            state.num ++
        }, 1000)

        // eslint-disable-next-line no-unused-vars
        const route = useRouter();

        // watch(() => route.path, (newVal) => {
        //     state.selectedKeys = [newVal]
        // },{immediate:true});

        const selectedKeys = computed(() => {
            return [route.path];
        })

        return {
            ...toRefs(state),
            selectedKeys
        }
    },
};
</script>

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>

