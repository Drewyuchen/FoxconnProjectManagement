<template>
  <div class="header" style="background-color:#FCFDFF; width: 100%">
    <div class="back">
      <img src="../assets/logoh.png">
    </div>
    <h1 style="text-align: center">富士康項目管理系統</h1>
    <div class="doneIcon">
      <img src="../assets/done.png">
    </div>
    <div class="checkButton">
  <el-button style="color:#4B77F2;">
    <el-link href="emp_job_added">項目工時已添加，點擊進入查看頁面</el-link>
  </el-button>
    </div>
    <el-divider></el-divider>
    <div class="Footer">
      This is Footer
    </div>
  </div>

</template>

<script>
    export default {
        name: "emp_job_complete"
    }
</script>

<style scope>
  .h1{text-align: center;vertical-align: center}
  .el-divider{width:100%}
  .checkButton{text-align: center;vertical-align: center;color:#4B77F2;margin-top: 5px}
  .doneIcon{text-align: center;vertical-align: center;horiz-align: center}
  .Footer{text-align: center;vertical-align: center;horiz-align: center}

</style>
