<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus adddBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">
          custom header
        </h3>
      </Modal>
  </div>
</template>

<script>

import Modal from './common/Modal'

export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo: function() {
      if(this.newTodoItem !== ''){
        this.$emit('addTodoItem',this.newTodoItem);
        this.clearInput();  
      } else {
        alert('tt');
      }
    },
    clearInput:function(){
      this.newTodoItem = '';
    }
  },
  components:{
     Modal:Modal
  }
};
</script>

<style scope>

    input:focus{
      outline: none;
    }
    .inputBox{
      background:white;
      height: 50px;
      line-height: 50px;
      border-radius: 5px;
    }
    .inputBox input{
      border-style:none;
      font-size:0.9rem
    }
    .addContainer{
      float: right;
      background: linear-gradient(to right,#6478FB,#8763FB);
      display: block;
      width: 3rem;
      border-radius: 0 5px 5px 0;
    }
    .addBtn{
      color : white;
      vertical-align: middle;
    }

</style>
