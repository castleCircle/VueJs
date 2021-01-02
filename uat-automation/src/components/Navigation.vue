<template>
     <div>
      <a href="#" @click="changeTestExecution">{{nav1.name}}</a>
      <a href="#" @click="changeTestHistory">{{nav2.name}}</a>
    </div>
</template>

<script>
import Constant from "../Constant"
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
        
        this.$store.commit(Constant.CHANGE_CURRENT_COMPONENT,{
            currentComponent:this.nav1.screen
        });
      },
      changeTestHistory(){
        console.log('changeTestHistory');
        
         this.$store.commit(Constant.CHANGE_CURRENT_COMPONENT,{
            currentComponent:this.nav2.screen
        });
      }
    }
}
</script>

<style>

</style>