<template>
    <div>
        <h3>{{screenName}}</h3>
        <table border="1">
            <thead>
                <th>케이스ID</th>
                <th>케이스명</th>
                <th>시나리오ID</th>
            </thead>
            <tbody>
                <tr v-for="testCase in testsCaseListFilterd" :key="testCase.tcId">
                    <td>{{testCase.tcId}}</td>
                    <td>{{testCase.name}}</td>
                    <td>{{testCase.tsId}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import eventBus from "../EventBus"

    export default{
        name : "TestCase",
        data : function(){
            return {
                screenName:"테스트 케이스",
                testCaseList:[
                    {tcId:"tc1",name:"케이스1",tsId:"ts1"},
                    {tcId:"tc2",name:"케이스2",tsId:"ts2"},
                    {tcId:"tc3",name:"케이스3",tsId:"ts3"}
                ],
                testsCaseListFilterd: [

                ]
            }
        },
        methods:{
            selectTcList(tsId){
                console.log(tsId);
                var testsCaseListFilterd;
                testsCaseListFilterd = this.testCaseList.filter(function(row){
                    return row.tsId === tsId
                })
                this.testsCaseListFilterd = testsCaseListFilterd
            }
        },
        created(){
            this.testsCaseListFilterd = this.testCaseList
            eventBus.$on("selectTsId",this.selectTcList);
        }
    }

</script>


<style>
</style>
