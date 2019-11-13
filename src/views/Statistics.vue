<template>
  <div class="Statistics">
    <!--面包屑-->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">薪资管理系统</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/setting' }">工资报表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="head">
      <el-row>
        <el-col :span="16">
          <div class="head-item head-title">{{title}}</div>
          <!-- 日期选择器 -->
          <div class="head-item">
            <span>月份</span>
            <el-date-picker v-model="search_form.month" type="month" placeholder="选择月"></el-date-picker>
          </div>
          <!-- 导出按钮 -->
          <div class="head-item">
            <el-button type="primary" icon="el-icon-download" plain round @click="exportExcel">导出</el-button>
          </div>
        </el-col>
        <!-- 搜索输入框 -->
        <el-col :span="8" class="search-head">
          <i class="el-icon-search"></i>
          <input type="text" class="search" placeholder="搜索工号、部门、姓名" />
        </el-col>
      </el-row>
    </div>
    <!-- 表格 -->
    <div class="container">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        v-loading="loading"
        element-loading-text="loading..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.2)"
      >
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
      <!-- 分页 -->
      <el-row>
        <el-pagination
          v-if="total > 0"
          :current-page="currentPage4"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          :layout="layout"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
// 引入api接口
import { getSalary } from "../api/basetablerequest";
export default {
  // 挂载结束后触发函数获取数据
  mounted() {
    this.getSalaryList();
  },
  data() {
    return {
      title: "工资报表",
      loading: true,
      search_form: {
        month: "",
        name: ""
      },
      currentPage4: 4, //需要给分页组件传的信息
      total: 0, // 总数
      pageIndex: 1, // 当前页
      pageSize: 5, // 1页显示多少条
      pageSizes: [5, 20, 30, 50, 100, 1000], //每页显示多少条
      layout: "total, sizes, prev, pager, next, jumper", // 翻页属性
      tableData: [] //请求到数据存放的数组
    };
  },
  methods: {
    changePage(val) {
      console.log(val);
    },
    // 点击编辑跳转到编辑出勤页面
    jump_editaddend() {
      this.$router.push("/editaddend");
    },
    // 每页多少条切换
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getSalaryList();
    },
    // 上下分页
    handleCurrentChange(page) {
      this.pageIndex = page;
      this.getSalaryList();
    },
    // 获取工资报表列表
    getSalaryList() {
      // 分页
      let pagedata = {
        limit: this.pageSize,
        currentpage: this.pageIndex
      };
      // 请求数据
      getSalary(pagedata)
        .then(res => {
          this.loading = false;
          let tabletotal = res.data.data.total;
          let tabledata = res.data.data.salary;
          this.total = tabletotal;
          this.tableData = tabledata;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 导出功能
    exportExcel() {
      require.ensure([], () => {
        const {
          export_json_to_excel
        } = require("../assets/excel/Export2Excel");
        // 设置Excel的表格第一行的标题
        const tHeader = [
          "部门",
          "姓名",
          "应出勤天数",
          "请假天数",
          "实际出勤天数",
          "基本工资",
          "岗位工资",
          "应发工资",
          "绩效工资",
          "违规扣款",
          "社保扣款",
          "全勤奖",
          "加班天数",
          "加班费",
          "其它",
          "实发工资"
        ];
        // index、nickName、name是tableData里对象的属性
        const filterVal = [
          "department",
          "name",
          "attendance",
          "leave",
          "actual",
          "base",
          "station",
          "shouldsend",
          "performance",
          "violation",
          "social",
          "duty",
          "overtime",
          "overtimepay",
          "other",
          "real"
        ];
        //把data里的tableData存到list
        const list = this.tableData;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "工资报表");
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
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

.el-pagination {
  text-align: center;
  white-space: normal;
  padding-top: 30px;
}
</style>
