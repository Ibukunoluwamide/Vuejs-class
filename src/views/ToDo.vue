<template>
  <div class="bg-black">
    <h1 class="text-2xl text-center text-white">Todo</h1>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
    <div class="flex justify-between p-2">
      <div class="">Count: {{ store.todoCount }}</div>
      <div class="flex gap-3">
        <div class=""  :key="index" v-for="(button, index) in  buttonArray">

        <button
          :class="button.style"
          @click="filterTodoBtn(button.title)"
        >
        <i class="capitalize">
          {{button.title}}

        </i>
        </button>
        </div>
      </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">#</th>
          <th scope="col" class="px-6 py-3">Todo Item</th>
          <th scope="col" class="px-6 py-3">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white truncate"
          :key="index"
          v-for="(todo, index) in filteredTodo"
        >
          <td class="px-6 py-4">
            {{ todo.id }}
          </td>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {{ todo.todo }}
          </th>
          <td class="px-6 py-4">
            {{ todo.completed ? "Completed" : "Pending" }}
          </td>

          <td class="px-6 py-4">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useToDoStore } from "../store/todoStore.js";
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
const store = useToDoStore();
console.log(store.todos);
const {todos, todoCount, completedTodo, pendingTodo} = storeToRefs(store)
console.log(todos);
let filterTodo = ref("all");
let buttonArray = [
    {
        title:"all", style: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    },
    {
        title:"pending", style: "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
    },
    {
        title:"completed", style: "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    }
]
onMounted(() => {
  console.log(store.getAllTodos());
  console.log(store.completedTodo);
  console.log(store.pendingTodo);
});
const filterTodoBtn = (params) => {
  console.log(params);
  filterTodo.value = params;
  console.log(filteredTodo.value);
};
const filteredTodo = computed(() => {
  if (filterTodo.value === "all") {
    return store.todos;
  } else if (filterTodo.value === "completed") {
    return store.completedTodo;
  } else if (filterTodo.value === "pending") {
    return store.pendingTodo;
  }
});
</script>

<style>
</style>