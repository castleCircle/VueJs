<template>
    <div class="container">
        <h2>실행내역</h2>
        <table border="1">
            <thead>
                <td>케이스ID</td>
                <td>케이스명</td>
                <td>시나리오ID</td>
            </thead>
            <tbody>
                <tr v-for="testHistory in testHistoryList" :key="testHistory.thId">
                    <td>{{testHistory.date}}</td>
                    <td>{{testHistory.time}}</td>
                    <td>{{testHistory.name}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default{
        name : "TestHistory",
        data(){
            return {
                testHistoryList:[
                    {thId:"1",date:"2019604",time:"010000",name:"시나리오1"},
                    {thId:"2",date:"2019604",time:"020000",name:"시나리오2"},
                    {thId:"3",date:"2019604",time:"030000",name:"시나리오3"}
                ]
            }
        }
    }
</script>


<style>
</style>
