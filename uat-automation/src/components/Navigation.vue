<template>
     <div>
      <a href="#" @click="changeTestExecution">{{nav1.name}}</a>
      <a href="#" @click="changeTestHistory">{{nav2.name}}</a>
    </div>
</template>

<script>
import eventBus from "../EventBus"
export default {
    name:"Navigation",
    data(){
      return {
        nav1:{
          name:"테스트 실행",
          screen : "TestExecution"
        },
        nav2:{
          name:"실행내역",
          screen : "TestHistory"
        }
      }
    },
    methods:{
      changeTestExecution(){
        console.log('changeTestExecution');
        eventBus.$emit("change-current-component",this.nav1.screen)
      },
      changeTestHistory(){
        console.log('changeTestHistory');
        eventBus.$emit("change-current-component",this.nav2.screen)
      }
    }
}
</script>

<style>

</style>