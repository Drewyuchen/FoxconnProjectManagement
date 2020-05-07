<template>
  <div class="header"style="background-color:#FCFDFF; width: 100%">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div class="back">
      <img src="../assets/logoh.png">
    </div>
    <div class="intro">
      <div class="intro-inner">
        <h1 style="text-align: center">{{msg}}</h1>
        <el-divider></el-divider>
        <h2 style="text-align: center">歡迎使用富士康項目管理系統</h2>
        <p style="text-align: center">您可以在此紀錄您的工作和工作時程。</p>
      </div>
      <div class ="body">
        <img src="../assets/images.png" >
        <ul class="actions">
          <el-link type="primary" href="emp_job">點擊添加項目++></el-link>
        </ul>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-link type="primary" href="emp_job_hour" style="font-size: small">點擊更新工作時程</el-link>
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="項目指派人">
              <span>{{ props.row.assigner }}</span>
            </el-form-item>
            <el-form-item label="開始時間">
              <span>{{ props.row.startTime }}</span>
            </el-form-item>
            <el-form-item label="結束時間">
              <span>{{ props.endTime }}</span>
            </el-form-item>
            <el-form-item label="工作內容">
              <span>{{ props.row.content }}</span>
            </el-form-item>
            <el-form-item label="工作執掌">
              <span>{{ props.row.workhandle }}</span>
            </el-form-item>
            <el-form-item label="工作產出">
              <span>{{ props.row.workoutput }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="工作任務"
        prop="job_content">
      </el-table-column>
      <el-table-column
        label="錄入日期"
        prop="insertDate">
      </el-table-column>
      <el-table-column
        label="工時統計"
        prop="WorkHour">
      </el-table-column>
    </el-table>
    <div class="Footer">
      This is Footer
    </div>
  </div>
</template>
<script>
    export default {
        name: "emp_job_added",
      methods: {
        goBack() {
          this.$router.go(-1);
        }
      },
      data() {
        return {
          tableData: [{
            job_content: '專案項目開發',
            insertDate: '2020-01-01',
            WorkHour: '6',
            assigner: 'Elvis',
            startTime: '2020-03-01',
            endTime: '2020-03-03',
            content:'統籌平台開發內容',
            workhandle:'平台搭建',
            workoutput:'系統平台'

          },
            {
              job_content: '專案項目開發',
              insertDate: '2020-01-01',
              WorkHour: '7',
              assigner: 'Elvis',
              startTime: '2020-03-04',
              endTime: '2020-03-07',
              content:'直播功能開發',
              workhandle:'平台搭建',
              workoutput:'系統平台'

            },{
              job_content: '專案項目開發',
              insertDate: '2020-01-01',
              WorkHour: '7',
              assigner: 'Elvis',
              startTime: '2020-03-09',
              endTime: '2020-03-11',
              content:'直播功能開發',
              workhandle:'平台搭建',
              workoutput:'系統平台'

            }]
        }
      }
    }
</script>

<style scoped>
  .body{text-align: center;vertical-align: center}
  .h2{text-align: center;vertical-align: center}
  .h1{text-align: center;vertical-align: center}
  .p{text-align: center;vertical-align:center}
  .el-link{font-size: 20px}
  .el-divider{width:100%}
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;}
  .Footer{text-align: center;vertical-align: center;horiz-align: center}

</style>
