<template>
  <div>
        <h3>실행내역</h3>
        <table border="1">
          <thead>
            <th>케이스ID</th>
            <th>케이스명</th>
            <th>시나리오 ID</th>
          </thead>
          <tbody>
              <tr v-for="testHistory in testHistoryList" :key="testHistory.time">
                <td>{{testHistory.date}}</td>
                <td>{{testHistory.time}}</td>
                <td>{{testHistory.name}}</td>
              </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:"TestHistory",
     data(){
      return {
          testHistoryList:[
          {thId:"1",date:"20190606",time:"010000",name:"시나리오1"},
          {thId:"2",date:"20190606",time:"020000",name:"시나리오2"},
          {thId:"3",date:"20190606",time:"030000",name:"시나리오3"},
        ]
      }
    }
}
</script>

<style>

</style>