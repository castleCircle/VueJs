<template>
    <div>
        <h3>{{screenName}}</h3>
        <table border="1">
            <thead>
                <th>시나리오ID</th>
                <th>시나리오명</th>
            </thead>
            <tbody>
                <tr v-for="testScenario in testScenarioList" :key="testScenario.tsId" @Click="selectTsId(testScenario.tsId)">
                    <td>{{testScenario.tsId}}</td>
                    <td>{{testScenario.name}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import eventBus from "../EventBus"


    export default{
        name : "TestScenario",
        data(){
            return {
                screenName:"테스트 시나리오",
                testScenarioList: [
                    {tsId:"ts1",name:"시나리오1"},
                    {tsId:"ts2",name:"시나리오2"},
                    {tsId:"ts3",name:"시나리오3"},
                ]
            }
        },
        methods:{
            selectTsId : function(tsId){
                console.log(tsId);
                eventBus.$emit("selectTsId",tsId);
            }
        }
    }
</script>


<style>
</style>
