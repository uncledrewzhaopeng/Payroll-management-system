<template>
  <div class="Setting">
    <!--面包屑-->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">薪资管理系统</el-breadcrumb-item>
        <el-breadcrumb-item>系统设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="adminitool">
      <span class="admintitle">管理员管理</span>
      <el-button icon="el-icon-lx-xinzeng1" class="btn" round @click="jump_addmin()">新增</el-button>
      <el-button icon="el-icon-delete-solid" class="btn" round>批量删除</el-button>
      <div class="seek">
        <i class="el-icon-search"></i>
        <el-input placeholder="请输入员工姓名、工号或部门" v-model="input"></el-input>
      </div>
    </div>
    <div class="container">
      <el-table
        :row-class-name="tableRowClassName"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" v-model="checked"></el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="number" label="工号">
        </el-table-column>
        <el-table-column prop="phone" label="手机">
        </el-table-column>
        <el-table-column  label="状态">
          <template slot-scope="scope">
            <el-switch disabled v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small" icon="el-icon-edit-outline">编辑</el-button>
            <el-button type="text" size="small" icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
</template>

<script>
import { getAdmin } from "../api/basetablerequest";
export default {
  data() {
    return {
      input: "",
      checked: false,
      currentPage4: 4,//需要给分页组件传的信息
      total: 0, // 总数
      pageIndex: 1, // 当前页
      pageSize: 5, // 1页显示多少条
      pageSizes: [5, 20, 30, 50, 100, 1000], //每页显示多少条
      layout: "total, sizes, prev, pager, next, jumper", // 翻页属性
      tableData: []
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.$router.push("/addadmin");
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "warning-row";
      } else if (rowIndex % 2 == 0) {
        return "success-row";
      }
      return "";
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 每页多少条切换
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getAdminList();
    },
    // 上下分页
    handleCurrentChange(page) {
      this.pageIndex = page;
      this.getAdminList();
    },
    changePage(val) {
      console.log(val);
    },
    jump_addmin() {
      this.$router.push("/addadmin");
    },
    //获取管理员列表、分页
    getAdminList() {
      let pagedata = {
        limit: this.pageSize,
        currentpage: this.pageIndex
      };
      getAdmin(pagedata)
        .then(res => {
          this.loading = false;
          let tabletotal = res.data.data.total;
          let tabledata = res.data.data.admin;
          // console.log(res.data.data.admin[0].state)
          // tabledata.forEach(item => {
          //   let tablestate = item.state;
          //   console.log(item.state)
          //   console.log(tablestate)
          // });
          this.total = tabletotal;
          this.tableData = tabledata;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getAdminList();
  }
};
</script>

<style lang="less">
    .el-table th,
    .el-table td {
        text-align: center;
    }

    .el-table .cell {
        font-size: 14px;
    }

    .el-table .warning-row {
        background: #dae8fa;
    }

    .el-table .success-row {
        background: white;
    }

    .adminitool {
        display: flex;
        margin: 20px 0px;
        position: relative;

        .admintitle {
            font-size: 21px;
            margin-left: 30px;
            margin-right: 30px;
        }

        .btn {
            margin: 0px 30px 0px 30px;
            border-radius: 20px;
            color: #409eff;
            background: #ecf5ff;
            border-color: #b3d8ff;
            font-size: 13px;
            font-family: "PingFang SC Medium", "PingFang SC";

            &:hover {
                background: #409eff;
                border-color: #409eff;
                color: #fff;
                font-size: 14px;
                font-weight: 500;
            }
        }

        .seek {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            color: #2a65ef;
            font-size: 30px;
            position: absolute;
            right: 0px;
        }

        .el-input__inner {
            background: #f1f5fd;
            border-radius: 0px;
            width: 300px;
            border-top-style: none;
            border-left-style: none;
            border-right-style: none;
            border-bottom: 1.5px solid blue;

            &::-webkit-input-placeholder {
                /* WebKit browsers */
                color: #999;
                font-size: 15px;
            }
        }
    }

    .el-button--text {
        font-size: 15px;
    }

    .el-button--text {
        font-size: 15px;
    }

    .el-pagination {
        white-space: normal;
    }
  
  .el-button--text {
    font-size: 15px;
  }

  .el-pagination {
      white-space: normal;
      padding-top: 30px;
  }
</style>