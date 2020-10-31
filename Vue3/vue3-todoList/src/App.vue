<!--
 * @Author: LHN
 * @Date: 2020-10-30 11:24:57
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-30 12:14:40
 * @description: In User Settings Edit
 * @FilePath: \vue3-todoList\src\App.vue
-->
<template>
  <section class="todoapp">
    <header class="header">
      <input class="new-todo" type="text" placeholder="想干的事" v-model="newTodo" @keydown.enter="addTodo"/>
    </header>
    <section class="main" v-show="todos.length">
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id" class="todo">
          <div class="view">
            <input type="checkbox" class="toggle" v-model="todo.completed" />
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
        </li>
      </ul>
      <button @click="removeCompleted">clear</button>
    </section>
  </section>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const state = reactive({
      newTodo: "",
      todos: [
        { id: "1", title: "吃饭", completed: false },
        { id: "2", title: "睡觉", completed: false },
        { id: "3", title: "学习vue3", completed: false },
        { id: "4", title: "写文章", completed: false },
        { id: "5", title: "看动画", completed: false },
        { id: "6", title: "逛知乎", completed: false },
        { id: "7", title: "撸狗", completed: false },
        { id: "8", title: "摸鱼", completed: true },
      ],
    });
    function addTodo(){
      if(state.newTodo === '')return;
      state.todos.push({
        id:state.todos.length+1,
        title:state.newTodo,
        completed:false,
      })
      state.newTodo = ''
    }
    function removeTodo(todo){
      state.todos = state.todos.filter((item) => item.id != todo.id)
    }
    function removeCompleted(){
      state.todos = state.todos.filter(item => !item.completed)
    }
    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
      removeCompleted,
    };
  },
};
</script>
