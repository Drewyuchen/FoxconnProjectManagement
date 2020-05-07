<template>
  <div style="background-color:#FCFDFF; width:100%">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="back">
      <img src="../assets/logoh.png">
    <div>
      <el-page-header @back="goBack" ></el-page-header>
    </div>
  </div>
    <el-divider></el-divider>
    <h1 style="text-align: center">富士康項目管理系統</h1>
    <p style="text-align: center">請在此選擇您的項目時程（項目開始與結束時間）</p>
    <div class="blockStartTime">
      <span class="demonstration">開始時間</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>
    <div class="blockEndTime">
      <span class="demonstration">結束時間</span>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>
    <div class="confirmButton">
      <el-link type="primary" href="emp_job_complete">點擊已確認完成</el-link>
    </div>
    <el-divider></el-divider>

    <div class="Footer">
      This is Footer
    </div>
  </div>
</template>

<script>
    export default {
        name: "emp_job_hour",
      methods: {
        goBack() {
          this.$router.go(-1)
        }
      },
      data() {
        return {
          value1: '',
          value2: ''
        }
      }
    }

</script>

<style scoped>
  .h1{text-align: center;vertical-align: center}
  .p{text-align: center;vertical-align:center}
  .el-divider{width:100%}
  .el-date-picker{ text-align:center ;opacity: 80% ;margin-left: 10px; margin-right: 10px;margin-top: 10px}
  .el-date-editor{width: 100%}
  .el-page-header{color:dodgerblue; font-size:40px}
  .el-link{font-size: larger;margin-top: 10px;text-align: center;vertical-align: center}
  .Footer{text-align: center;vertical-align: center;horiz-align: center}
  .confirmButton{text-align: center}
  .blockStartTime{text-align: center;padding: 5px 5px 5px 5px}
  .blockEndTime{text-align: center;padding: 5px 5px 5px 5px}

</style>
