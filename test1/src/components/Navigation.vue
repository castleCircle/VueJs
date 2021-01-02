<template>
    <div>
        <a href="#" @click="changeScreenExecution">{{nav1.name}}</a>
        <a href="#" @click="changeScreenHistory">{{nav2.name}}</a>
    </div>
</template>

<script>
import eventBus from '../EventBus'
    export default{
        name : "Navigation",
        data(){
            return {
                nav1:{
                    name:"테스트 실행",
                    screen:"test-execution"
                },
                nav2:{
                    name:"실행 내역",
                    screen:"test-history"
                }
            }
        },
        methods : {
            changeScreenExecution(){
                console.log("changeScreenExecution");
                eventBus.$emit("change-current-component",this.nav1.screen);
            },
            changeScreenHistory(){
                console.log("changeScreenHistory");
                eventBus.$emit("change-current-component",this.nav2.screen);
            }
        }
    }
</script>


<style>
</style>
