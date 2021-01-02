<template>
  <div>
    <h3>테스트 케이스</h3>
    <table border="1">
      <thead>
        <th>케이스ID</th>
        <th>케이스명</th>
        <th>시나리오ID</th>
      </thead>
      <tbody>
        <tr v-for="testCase in testCaseListFiltered" :key="testCase.tcId">
            <td>{{testCase.tcId}}</td>
            <td>{{testCase.tcName}}</td>
            <td>{{testCase.tsId}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import eventBus from "../EventBus"

export default {
    name:"TestCase",
    data(){
        return {
          testCaseList:[
              {tcId:"tc1",tcName:"케이스1",tsId:"ts1"},
              {tcId:"tc2",tcName:"케이스2",tsId:"ts1"},
              {tcId:"tc3",tcName:"케이스3",tsId:"ts2"}
          ],
          testCaseListFiltered:[
          ]
        }
      },
      methods:{
        filterTestCase(tsId){
          this.testCaseListFiltered = this.testCaseList.filter(function(row){
            return row.tsId === tsId;
          })
        }
      },
      created(){
        this.testCaseListFiltered = [...this.testCaseList];
        eventBus.$on("selectTsId",this.filterTestCase);
      }
}
</script>

<style>

</style>