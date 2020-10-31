<template>
  <h1>count is: {{ state.count }}</h1>
  <button @click="add">累加</button>
  <h2>{{ num }}</h2>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
function test() {
  onMounted(() => {
    console.log("mounted");
  });
}

export default {
  name: "HelloWorld",
  // hook 函数
  setup() {
    const { state, double } = useCounter(1);

    // const state = reactive({
    //   count: 1,
    // });
    test();
    const num = ref(0);

    console.log(num);

    function add() {
      state.count++;
      num.value++;
    }
    // const double = computed(() => {
    //   state.count * 2;
    // });

    return {
      state,
      add,
      double,
      num,
    };
  },
};

function useCounter(count,n) {
  const state = reactive({
    count,
  });
  const double = computed(() => state.count * 2);
  return { state, double };
}
</script>
