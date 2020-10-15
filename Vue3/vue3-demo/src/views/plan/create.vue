<!--
 * @Author: LHN
 * @Date: 2020-10-14 10:29:02
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-14 12:23:37
 * @description: In User Settings Edit
 * @FilePath: \vue3-demo\src\views\plan\create.vue
-->
<template>
  <a-form-item label="选择计划的日期">
    <a-date-picker
      v-model:value="form.date1"
      type="date"
      placeholder="选择计划的日期"
      style="width: 100%"
    />
  </a-form-item>
  <a-form-item label="请选择耗时">
    <a-input-number v-model:value="form.time" :min="1" :max="10" />
  </a-form-item>
  <a-form-item label="请输入待办事项">
    <a-textarea
      v-model:value="form.content"
      placeholder="请输入待办事项"
      :rows="4"
    />
  </a-form-item>
  <a-form-item label="确认提交">
    <a-button type="primary" @click="onSubmit"> 提交 </a-button>
  </a-form-item>
</template>
<script>
import { reactive, toRefs } from "vue";
// import moment from "moment";
export default {
  name:'Create',
  // emits: ["headle"],
  setup(_, context) {
    // eslint-disable-next-line no-unused-vars
    const state = reactive({
      form: {
        date: Date.now(),
        time: 1,
        content: "",
      },
    });
    const onSubmit = () => {
        console.log('触发');
        context.emit("headle",state.form)
    }
    return {
      ...toRefs(state),
      onSubmit,
    };
  },
};
</script>
