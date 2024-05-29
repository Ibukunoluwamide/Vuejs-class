import axios from "axios"
import {defineStore} from "pinia"
export const useToDoStore = defineStore("todoStore", {
    state: () => {
       return { 
        todos: []
    }},
    getters:{
      todoCount: (state)=>state.todos.length,
      completedTodo: (state)=>state.todos.filter((todo)=>todo.completed),
      pendingTodo: (state)=>state.todos.filter((todo)=>!todo.completed)
    },
    actions:{
       getAllTodos(){
        axios.get('https://dummyjson.com/todos')
        .then((result) => {
            console.log(result.data.todos);
            this.todos = result.data.todos
        }).catch((err) => {
            
        });
       }
    },
    persist: true,
})