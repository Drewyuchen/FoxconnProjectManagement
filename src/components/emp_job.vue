<template>
  <div class="header" style="background-color:#FCFDFF; width: 100%">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="back">
      <img src="../assets/logoh.png">
      <div>
        <el-page-header @back="goBack" ></el-page-header>
      </div>
    </div>
    <h1 style="text-align: center">富士康項目管理系統</h1>
    <el-divider></el-divider>
    <p style="text-align: center">請在此選擇您的任務</p>
      <el-row style="text-align: center">
        <div>
      <el-button><el-link type="primary" href="emp_job_content">專案項目</el-link>
      </el-button>
          <el-button><el-link type="success" href="emp_job_content">培訓業務</el-link>
          </el-button>
        </div>
        <div>
          <el-button>
            <el-link type="info"href="emp_job_content">工作會議</el-link>
           </el-button>
          <el-button>
            <el-link type="warning"href="emp_job_content">自我學習</el-link>
          </el-button>
        </div>
        <div>
          <el-button>
            <el-link type="danger"href="emp_job_content" style="text-align: center">臨時任務</el-link>
            </el-button>
        </div>
    </el-row>
    <el-divider></el-divider>
    <div class="Footer" >
    This is Footer
  </div>
  </div>
</template>

<script>
    export default {
      name: "emp_job",
      data() {
        return {
        }
      },
      methods: {
        goBack() {
          this.$router.go(-1);
        }
        }
      }
</script>

<style scoped>
  .el-button{background-color:#4B77F2;width:120px;height:120px;font-size:20px;text-align: center;margin: 5px 5px 5px 5px}
  .el-divider{width: 100%}
  .el-link{font-size:medium; color: white;text-align: center;vertical-align: center}
  .el-page-header{color:dodgerblue; font-size:large}
  .el-divider{width:100%}
  .Footer{text-align: center;vertical-align: center;horiz-align: center}
</style>
