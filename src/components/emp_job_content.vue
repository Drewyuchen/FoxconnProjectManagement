<template>
  <div class= "header" style="background-color:#FCFDFF; width: 100%">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="back">
      <img src="../assets/logoh.png">
      <div>
        <el-page-header @back="goBack" ></el-page-header>
      </div>
    </div>
    <h1 style="text-align: center">富士康項目管理系統</h1>
    <el-divider></el-divider>
    <p style="text-align: center">請在此選擇您的工作任務內容</p>
    <div class="buttons">
    <el-button plain style="margin-left: 10px"><el-link type="primary" href="emp_job_handle">負責內容</el-link></el-button>
    <el-button plain><el-link type="primary" href="emp_job_handle">負責內容</el-link></el-button>
    <el-button plain><el-link type="primary" href="emp_job_handle">負責內容</el-link></el-button>
    <el-button plain><el-link type="primary" href="emp_job_handle">負責內容</el-link></el-button>
    <el-button plain><el-link type="primary" href="emp_job_handle">負責內容</el-link></el-button>
    </div>
    <el-divider></el-divider>
    <div class="Footer">
      This is Footer
    </div>
  </div>
</template>

<script>
    export default {
        name: "emp_job_content",
      methods: {
        goBack() {
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .h1{text-align: center;vertical-align: center}
  .p{text-align: center;vertical-align:center}
  .el-divider{width:100%}
  .el-page-header{color:dodgerblue; font-size:40px}
  .el-button{width:100%;vertical-align: center; margin-bottom: 5px}
  .buttons{text-align: center;margin-left: 5px;margin-right: 5px; vertical-align: auto}
  .Footer{text-align: center;vertical-align: center;horiz-align: center}
</style>
