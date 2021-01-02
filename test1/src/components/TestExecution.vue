<template>
    <div class="container">
        <h5 align="right">사용자: {{userId}} </h5>
        <TestScenario></TestScenario>
        <TestCase></TestCase>
        <p></p>
        <button @click="execution">실행</button>
    </div>
</template>

<script>
import TestCase from '@/components/TestCase.vue'
import TestScenario from '@/components/TestScenario.vue'

    export default{
        name : "TestExecution",
        props:["userId"],
        methods:{
            execution(){
                console.log("execution");
                setTimeout(function(){
                    alert("실행완료")
                },2000)
            }
        },
        components:{
            TestCase,
            TestScenario
        }

    }
</script>


<style>
</style>
