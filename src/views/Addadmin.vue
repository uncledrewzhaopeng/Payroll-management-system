<template>
  <div class="Addadmin">
    <!--面包屑-->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">薪资管理系统</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/setting' }">系统设置</el-breadcrumb-item>
        <el-breadcrumb-item>新增管理员</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="manage">
      <span>新增管理员</span>
    </div>
    <div class="container">
      <div class="container_img">
        <img src="../assets/img/u929.png" alt />
      </div>
      <div class="container_text">
        <span>账号信息</span>
      </div>
      <div class="container_frame">
        <div class="container_column">
          <span>姓名*</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>工号*</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>密码*</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
      </div>
      <div class="container_frame2">
        <div class="container_column2">
          <span>手机</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column2">
          <span class="status">状态</span>
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
      </div>
      <div class="container_line">
        <div class="line_img">
          <img src="../assets/img/u1008.png" alt />
        </div>
      </div>
      <div class="container_img">
        <img src="../assets/img/u2824.png" alt />
      </div>
      <div class="container_text">
        <span>权限设置</span>
      </div>
      <div class="container_check">
        <div class="container_check_all">
          <el-checkbox v-model="checked">所有权限</el-checkbox>
        </div>

        <div class="container_check_home">
          <span>首页</span>
          <el-checkbox v-model="checked">数据统计</el-checkbox>
        </div>

        <div class="container_check_staff">
          <span>员工管理</span>
          <el-checkbox v-model="checked">查看</el-checkbox>
          <el-checkbox v-model="checked">新增</el-checkbox>
          <el-checkbox v-model="checked">编辑</el-checkbox>
          <el-checkbox v-model="checked">删除</el-checkbox>
          <el-checkbox v-model="checked">批量删除</el-checkbox>
          <el-checkbox v-model="checked">导出</el-checkbox>
          <el-checkbox v-model="checked">搜索</el-checkbox>
        </div>

        <div class="container_check_statistics">
          <span>出勤统计</span>
          <el-checkbox v-model="checked">查看</el-checkbox>
          <el-checkbox v-model="checked">编辑</el-checkbox>
          <el-checkbox v-model="checked">导出</el-checkbox>
          <el-checkbox v-model="checked">搜索</el-checkbox>
        </div>

        <div class="container_check_statement">
          <span>工资报表</span>
          <el-checkbox v-model="checked">查看</el-checkbox>
          <el-checkbox v-model="checked">编辑</el-checkbox>
          <el-checkbox v-model="checked">导出</el-checkbox>
          <el-checkbox v-model="checked">搜索</el-checkbox>
        </div>

        <div class="container_check_admin">
          <span>管理员管理</span>
          <el-checkbox v-model="checked">查看</el-checkbox>
          <el-checkbox v-model="checked">新增</el-checkbox>
          <el-checkbox v-model="checked">编辑</el-checkbox>
          <el-checkbox v-model="checked">删除</el-checkbox>
          <el-checkbox v-model="checked">批量删除</el-checkbox>
          <el-checkbox v-model="checked">禁用</el-checkbox>
          <el-checkbox v-model="checked">搜索</el-checkbox>
        </div>

        <div class="container_save">
          <div class="save_text">
            <span>保存</span>
          </div>
        </div>
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
      checked: false
    };
  }
};
</script>

<style lang="less" >
// 激活菜单项实现动态更换背景色,
.el-menu-item.is-active {
  color: white;
  background-color: white !important;
  border-left: 5px solid white;
}

.manage {
  display: flex;
  margin: 20px 0px;
  position: relative;
  font-size: 21px;
  margin-left: 30px;
}

.container_img {
  float: left;
  margin-top: -10px;
  img {
    width: 20px;
    height: 20px;
  }
}

.container_text {
  float: left;
  margin-top: -13px;
  span {
    padding-left: 10px;
    font-weight: 500;
    font-size: 18px;
    color: #2561ef;
  }
}

.container_frame {
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  margin-top: 20px;
  padding-left: 90px;
  // margin: 0 auto;
  .container_column {
    flex: 1;
    padding: 0 50px;
    span {
      position: relative;
      right: 130px;
      top: 25px;
    }
  }
}

.container_frame2 {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  margin-top: 20px;
  padding-left: 90px;
  .container_column2 {
    flex: 1;
    padding: 0 50px;
    span {
      position: relative;
      left: -132px;
      top: 25px;
    }
    .status {
      position: relative;
      left: -112px;
      top: 25px;
    }
    .el-switch__core {
      position: relative;
      left: -92px;
      top: 25px;
    }
  }
}

.container_line {
  padding: 30px;
  width: 1100px;
  height: 100%;
}

.container_check {
  // display: flex;
  text-align: left;
  text-indent: 10px;
  font-weight: bold;
  line-height: 70px;
  // margin: 0 50px;
  margin-bottom: 120px;
  .container_check_all {
    .el-checkbox {
      position: relative;
      left: -110px;
      top: 15px;
      .el-checkbox__label {
        font-weight: bold;
        font-size: 16px;
        position: relative;
        left: -10px;
        top: 1px;
      }
    }
  }
}

.container_save {
  position: absolute;
  left: 530px;
  top: 820px;
  font-size: 16px;
  .save_text {
    width: 280px;
    height: 40px;
    background-color: rgba(37, 97, 239, 1);
    border-radius: 5px;
    box-shadow: 0px 2px 20px rgba(37, 97, 239, 0.827450980392157);
    font-size: 16px;
    span {
      display: block;
      color: #fff;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>