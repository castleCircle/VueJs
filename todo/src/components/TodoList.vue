<template>
<div>
  <Todo v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-checkbox="toggleCheckbox" @click-delete="deleteTodo"></Todo> 
  </div>
</template>

<script>

import Todo from '@/components/Todo.vue'
export default {
    components:{
        Todo
    },
    props:{
        todo:{
            type:Array,
            required:true
        }
    },
    methods:{
        toggleCheckbox(value){
            this.$emit('toggle-checkbox',value)
        },
        deleteTodo(todoId){
            this.$emit('click-delete',todoId);
        }
    }
}
</script>

<style>

</style>