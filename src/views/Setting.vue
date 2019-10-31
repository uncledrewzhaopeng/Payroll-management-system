<template>
  <div class="Setting">
    <!--面包屑-->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">薪资管理系统</el-breadcrumb-item>
        <el-breadcrumb-item>系统设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="usertool">
      <span class="usertitle">管理员管理</span>
      <el-button icon="el-icon-lx-xinzeng1" class="btn" round @click="jump_addmin()">新增</el-button>
      <el-button icon="el-icon-delete-solid" class="btn" round>批量删除</el-button>
      <div class="seek">
        <i class="el-icon-search"></i>
        <el-input placeholder="请输入员工姓名、工号或部门" v-model="input"></el-input>
      </div>
    </div>
    <div class="container">
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="number" label="工号"></el-table-column>
        <el-table-column prop="phone" label="手机"></el-table-column>
        <el-table-column prop="state" label="状态">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <i class="el-icon-edit-outline"></i>
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <i class="el-icon-delete"></i>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="text-align: center;margin-top: 30px;">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="current_change"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      input: "",
      total: 100,
      pagesize: 10,
      currentPage: 1,
      tableData: [
        {
          name: "王小虎",
          number: "20180609001",
          phone: "18854138756"
        },
        {
          name: "王小虎",
          number: "20180609001",
          phone: "18854138756"
        },
        {
          name: "王小虎",
          number: "20180609001",
          phone: "18854138756"
        },
        {
          name: "王小虎",
          number: "20180609001",
          phone: "18854138756"
        },
        {
          name: "王小虎",
          number: "20180609001",
          phone: "18854138756"
        },
        {
          name: "王小虎",
          number: "20180609001",
          phone: "18854138756"
        },
        {
          name: "王小虎",
          number: "20180609001",
          phone: "18854138756"
        },
        {
          name: "王小虎",
          number: "20180609001",
          phone: "18854138756"
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    jump_addmin() {
      this.$router.push("/addadmin");
    }
  }
};
</script>

<style lang="less">
.el-table {
  height: 400px;
  overflow: scroll;
}

.el-table td,
.el-table th {
  text-align: center !important;
}

.el-table--mini,
.el-table--small,
.el-table__expand-icon {
  font-size: 14px;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.usertool {
  display: flex;
  margin: 20px 0px;
  position: relative;

  .usertitle {
    font-size: 21px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .btn {
    margin: 0px 20px;
    border: 1px solid #2a65ef;
    color: #2a65ef;
    font-size: 14px;

    &:hover {
      background: blue;
      color: white;
      font-size: 16px;
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
</style>