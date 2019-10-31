<template>
  <div class="attendance-page">
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
      <el-row :gutter="20" class="c-head">
        <el-col :span="3">姓名</el-col>
        <el-col :span="3">部门</el-col>
        <el-col :span="3">迟到次数</el-col>
        <el-col :span="3">早退次数</el-col>
        <el-col :span="3">未打卡次数</el-col>
        <el-col :span="3">加班天数</el-col>
        <el-col :span="3">未写日志次数</el-col>
        <el-col :span="3">操作</el-col>
      </el-row>
      <el-row :gutter="20" class="c-item" v-for="(item, i) in arr" :key="i">
        <el-col :span="3">李明</el-col>
        <el-col :span="3">技术部</el-col>
        <el-col :span="3">4</el-col>
        <el-col :span="3">4</el-col>
        <el-col :span="3">3</el-col>
        <el-col :span="3">5</el-col>
        <el-col :span="3">5</el-col>
        <el-col :span="3">
          <el-button type="text" icon="el-icon-edit" size="large">编辑</el-button>
        </el-col>
      </el-row>
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
      title: '出勤统计',
      search_form: {
        month: '',
        name: ''
      },
      arr: [1,2,3,4,5,6,7,8],
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
.attendance-page {
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
