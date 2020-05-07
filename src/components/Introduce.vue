<template>
  <div class="header" style="background-color:#FCFDFF; width: 100%">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <img src="../assets/logoh.png">
    <el-divider></el-divider>
    <div class="body">
  <div class="intro">
        <div class="intro-inner">
            <h1 style="text-align: center">{{msg}}</h1>
          <p style="text-align: center">您可以在此紀錄您的工作和工作時程。</p>
        </div>
    <div class ="body">
      <img src="../assets/images.png">
    </div>
      <ul class="actions">
        <el-link type="primary" href="emp_job" style="text-align: center">點擊添加項目++></el-link>
      </ul>
    </div>
    </div>
    <el-divider></el-divider>
    <div class="Footer">
      This is Footer
    </div>
  </div>
</template>
<script>
    export default{
        name:"Introduce",
        data(){
            return {
                msg:"重要的團隊成員您好"
            }
        }
    }
</script>
<style type="text/css">
  .el-link{font-size: 20px}
  .el-divider{width:100%}
  .body{text-align: center; vertical-align: center}
  .Footer{text-align: center;vertical-align: center;horiz-align: center}
</style>
