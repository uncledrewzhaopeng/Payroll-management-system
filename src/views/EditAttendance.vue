<template>
  <div class="edit-attendance-page">
    <div class="container">
      <el-form :model="attendance_form" :rules="attendance_rules" ref="attendance_form" label-width="100px" label-position="left" class="dialog-wrap">
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="姓名">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="部门">
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="请假天数">
                <el-input></el-input>
                <span>天</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="未打卡次数">
                <el-input></el-input>
                <span>次</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="加班天数">
                <el-input></el-input>
                <span>天</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="未写日志次数">
                <el-input></el-input>
                <span>次</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="double-line">
            <el-col :span="12">
              <el-form-item label="迟到次数">
                <div>
                  <el-input></el-input>
                  <span>次,1-10（含10）分钟</span>
                </div>
                <div>
                  <el-input></el-input>
                  <span>次,1-30（含30）分钟</span>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="早退次数">
                <div>
                  <el-input></el-input>
                  <span>次,1-10（含10）分钟</span>
                </div>
                <div>
                  <el-input></el-input>
                  <span>次,1-30（含30）分钟</span>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <div style="text-align:center;">
          <el-button type="primary" size="large" style="padding-left:80px;padding-right:80px;">保存</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      attendance_form: {},
      attendance_rules: {}
    }
  }
}
</script>

<style lang="less">
.edit-attendance-page {
  text-align: left;
  span {
    margin-left: 6px;
  }
  .el-input {
    display: inline-block;
    width: 150px;
  }
  .double-line {
    div {
      margin: 0 0 10px;
    }
  }
  .el-row {
    margin: 16px 0;
  }
}
</style>
