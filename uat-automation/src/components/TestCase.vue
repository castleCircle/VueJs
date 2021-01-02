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
        <tr v-for="testCase in filteredTcList" :key="testCase.tcId">
            <td>{{testCase.tcId}}</td>
            <td>{{testCase.tcName}}</td>
            <td>{{testCase.tsId}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
    name:"TestCase",
    props:[
      "selectTsId"
    ],
    data(){
        return {          
          testCaseListFiltered:[
          ]
        }
      },
      computed:{
        filteredTcList:function(){

            if(this.selectTsId != ""){
               return this.$store.state.testCaseList.filter((row)=>{
                return row.tsId === this.selectTsId;
              }) 
            }else{
              return [...this.$store.state.testCaseList];
            }

            
        }
      },
      created(){
        this.testCaseListFiltered = [...this.$store.state.testCaseList]
      }
}
</script>

<style>

</style>