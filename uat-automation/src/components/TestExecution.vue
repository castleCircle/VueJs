<template>
    <div class="container">
        <h5 align="right">사용자 : {{userId}}</h5>
        <TestScenario></TestScenario>
        <TestCase :select-ts-id="this.$store.state.selectTsId"></TestCase>
        <p></p>
        <button @click="execution">실행</button>
    </div>
</template>

<script>

import TestScenario from "@/components/TestScenario"
import TestCase from "@/components/TestCase"

export default {
    name:"TestExecution",
    components:{TestScenario,TestCase},
    props:["userId"],
    methods:{
      execution:function(){
        console.log("execution")
        alert('실행!');
      }
    }
}
</script>

<style>

</style>