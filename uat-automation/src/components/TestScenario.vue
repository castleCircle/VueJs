<template>
    <div>
      <h3>{{screenName}}</h3>
      <table border="1">
        <thead>
          <th>시나리오ID</th>
          <th>시나리오명</th>
        </thead>
        <tbody>
          <tr v-for="testScenario in this.$store.state.testScenarioList" :key="testScenario.tsId" @click="selectTsId1(testScenario.tsId)">
            <td>{{testScenario.tsId}}</td>
            <td>{{testScenario.tsName}}</td>
          </tr>
      </tbody>
      </table>
    </div>
</template>
<script>

    import Constant from '../Constant'
    export default {
        name:"TestScenario",
        data(){
            return {
                screenName: "테스트 시나리오"               
            }
        },
        methods:{
            selectTsId1(tsId){
              this.$store.commit(Constant.SELECT_TS_ID,{
                selectTsId : tsId
              });
            }
        }
    }
</script>

<style>

</style>