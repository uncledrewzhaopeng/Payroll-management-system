<template>
  <div class="Statistics">
    <div class="head">
      <el-row>
        <el-col :span="16">
          <div class="head-item head-title">{{title}}</div>
          <div class="head-item">
            <span>月份</span>
            <el-date-picker v-model="search_form.month" type="month" placeholder="选择月"></el-date-picker>
          </div>
          <div class="head-item">
            <el-button type="primary" icon="el-icon-download" plain round>导出</el-button>
          </div>
        </el-col>
        <el-col :span="8" class="search-head">
          <i class="el-icon-search"></i>
          <input type="text" class="search" placeholder="搜索工号、部门、姓名" />
        </el-col>
      </el-row>
    </div>
    <div class="container">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="department" label="部门"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="attendance" label="应出勤天数"></el-table-column>
        <el-table-column prop="leave" label="请假天数"></el-table-column>
        <el-table-column prop="actual" label="实际出勤天数"></el-table-column>
        <el-table-column prop="base" label="基本工资"></el-table-column>
        <el-table-column prop="station" label="岗位工资"></el-table-column>
        <el-table-column prop="shouldsend" label="应发工资"></el-table-column>
        <el-table-column prop="performance" label="绩效工资"></el-table-column>
        <el-table-column prop="violation" label="违规扣款"></el-table-column>
        <el-table-column prop="social" label="社保扣款"></el-table-column>
        <el-table-column prop="duty" label="全勤奖"></el-table-column>
        <el-table-column prop="overtime" label="加班天数"></el-table-column>
        <el-table-column prop="overtimepay" label="加班费"></el-table-column>
        <el-table-column prop="other" label="其它"></el-table-column>
        <el-table-column prop="real" label="实发工资"></el-table-column>
        <el-table-column prop="operation" label="操作">
          <el-button type="text" icon="el-icon-edit" size="large" @click="jump_editaddend()">编辑</el-button>
        </el-table-column>
      </el-table>
      <el-row>
        <el-pagination
          v-if="total > 0"
          @current-change="changePage"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          :pager-count="5"
          layout="total, prev, pager, next"
          style="float:right; margin: 25px 0 0;"
        ></el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "工资报表",
      search_form: {
        month: "",
        name: ""
      },
      total: 100,
      currentPage: 1,
      pageSize: 20,
      tableData: [
        {
          department: "技术部",
          name: "扫地僧",
          attendance: 22,
          leave: 2,
          actual: 20,
          base: 7000,
          station: 2000,
          shouldsend: 8300,
          performance: 800,
          violation: 100,
          social: 1000,
          duty: 100,
          overtime: 0,
          overtimepay: 0,
          other: 0,
          real: 9100
        },
        {
          department: "技术部",
          name: "扫地僧",
          attendance: 22,
          leave: 2,
          actual: 20,
          base: 7000,
          station: 2000,
          shouldsend: 8300,
          performance: 800,
          violation: 100,
          social: 1000,
          duty: 100,
          overtime: 0,
          overtimepay: 0,
          other: 0,
          real: 9100
        },
        {
          department: "技术部",
          name: "扫地僧",
          attendance: 22,
          leave: 2,
          actual: 20,
          base: 7000,
          station: 2000,
          shouldsend: 8300,
          performance: 800,
          violation: 100,
          social: 1000,
          duty: 100,
          overtime: 0,
          overtimepay: 0,
          other: 0,
          real: 9100
        },
        {
          department: "技术部",
          name: "扫地僧",
          attendance: 22,
          leave: 2,
          actual: 20,
          base: 7000,
          station: 2000,
          shouldsend: 8300,
          performance: 800,
          violation: 100,
          social: 1000,
          duty: 100,
          overtime: 0,
          overtimepay: 0,
          other: 0,
          real: 9100
        }
      ]
    };
  },
  methods: {
    changePage(val) {
      console.log(val);
    },
    jump_editaddend() {
      this.$router.push('/editaddend');
    }
  }
};
</script>

<style lang="less">
.Statistics {
  text-align: left;
  .head {
    margin: 30px 0 20px;
  }
  .head-item {
    display: inline-block;
    margin: 0 12px;
    span {
      margin-right: 15px;
    }
  }
  .head-title {
    font-weight: bold;
    font-size: 22px;
  }
  .search-head {
    text-align: right;
    padding-top: 7px;
    i {
      font-size: 24px;
      margin-right: 10px;
      color: rgb(24, 46, 241);
      vertical-align: middle;
    }
    input {
      border: none;
      background: none;
      font-size: 16px;
      line-height: 24px;
      border-bottom: 1px solid rgb(24, 46, 241);
      margin-right: 25px;
      &:focus {
        outline: none;
      }
    }
  }

  .el-table td,
  .el-table th {
    text-align: center;
  }
  .el-table th > .cell {
    font-size: 13.5px;
  }
  .el-table td > .cell {
    font-size: 13px;
  }
  .el-table .cell,
  .el-table th div {
    padding: 0;
  }
}
</style>
