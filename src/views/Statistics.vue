<template>
  <div class="Statistics">
    <div class="head">
      <el-row>
        <el-col :span="16">
          <div class="head-item head-title">{{title}}</div>
          <div class="head-item">
            <span>月份</span>
            <el-date-picker
              v-model="search_form.month"
              type="month"
              placeholder="选择月">
            </el-date-picker>
          </div>
          <div class="head-item">
            <el-button type="primary" icon="el-icon-download" plain round>导出</el-button>
          </div>
        </el-col>
        <el-col :span="8" class="search-head">
          <i class="el-icon-search"></i>
          <input type="text" class="search" placeholder="搜索工号、部门、姓名">
        </el-col>
      </el-row>
    </div>
    <div class="container">
      表格内容
      表格内容
      表格内容
      表格内容
      表格内容
      <el-row>
        <el-pagination
          v-if="total > 0"
          @current-change="changePage"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          :pager-count="5"
          layout="total, prev, pager, next"
          style="float:right; margin: 25px 0 0;">
        </el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '工资报表',
      search_form: {
        month: '',
        name: ''
      },
      total: 100,
      currentPage: 1,
      pageSize: 20
    }
  },
  methods: {
    changePage (val) {
      console.log(val);
    }
  }
}
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
  .container {
    text-align: center;
  }
  .c-head {
    font-weight: bold;
    color: #666;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
    .el-col {
      border-right: 2px solid #ddd;
      &:last-of-type {
        border-right: none;
      }
    }
  }
  .c-item {
    padding: 12px 0;
    .el-button {
      padding: 0;
    }
    &:nth-of-type(2n + 1) {
      background-color: #dae8fa;
    }
  }
}
</style>
