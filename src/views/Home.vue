<template>
  <div class="home">
    <el-container>
      <el-aside width="200px" v-show="shrink">
        <div class="adise">
          <div class="adise_img1">
            <img src="../assets/img/u183.png" alt />
          </div>
          <div class="adise_img2">
            <img src="../assets/img/u181.png" alt />
          </div>
          <div class="adise_text">
            <p>薪资管理系统</p>
          </div>
          <div class="adise_home">
            <div class="adise_home_img">
              <img src="../assets/img/u187.png" alt />
            </div>
            <div class="adise_home_text">
              <span>首页</span>
            </div>
          </div>
          <div class="adise_staff">
            <div class="adise_staff_img">
              <img src="../assets/img/u192.png" alt />
            </div>
            <div class="adise_staff_text">
              <span>员工管理</span>
            </div>
          </div>
          <div class="adise_tofw">
            <div class="adise_tofw_img">
              <img src="../assets/img/u197.png" alt />
            </div>
            <div class="adise_tofw_text">
              <span>出勤统计</span>
            </div>
          </div>
          <div class="adise_statement">
            <div class="adise_statement_img">
              <img src="../assets/img/u202.png" alt />
            </div>
            <div class="adise_statement_text">
              <span>工资报表</span>
            </div>
          </div>
          <div class="adise_set">
            <div class="adise_set_img">
              <img src="../assets/img/u207.png" alt />
            </div>
            <div class="adise_set_text">
              <span>系统设置</span>
            </div>
          </div>
        </div>
        <div></div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
            <div class="collapse-btn" @click="collapseChage">
              <i v-if="!collapse" class="el-icon-s-fold"></i>
              <i v-else class="el-icon-s-unfold"></i>
            </div>
            <div class="header-right">
              <div class="header-user-con">
                <div class="user-avator">
                  <img src="../assets/img/logo.png" />
                </div>
                <span class="header-name">admin</span>
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link">
                    {{username}}
                    <i class="el-icon-caret-bottom"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <a href="https://gitee.com/" target="_blank">
                      <el-dropdown-item>系统设置</el-dropdown-item>
                    </a>
                    <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
        </el-header>
        <el-main>
          <div class="u2498">
            <div class="u2498_text">
              <span>管理员管理</span>
            </div>
            <div class="u2500">
              <div class="u2500_img">
                <img src="../assets/img/u258.png" alt />
              </div>
              <div class="u2500_text">
                <span>新增</span>
              </div>
            </div>
            <div class="u2501">
              <div class="u2501_img">
                <img src="../assets/img/u259.png" alt />
              </div>
            </div>
            <div class="u2503">
              <div class="u2503_img">
                <img src="../assets/img/u261.png" alt />
              </div>
              <div class="u2503_text">
                <span>批量删除</span>
              </div>
            </div>
            <div class="u2504">
              <div class="u2504_img">
                <img src="../assets/img/u262.png" alt />
              </div>
            </div>
            <div class="u2506">
              <div class="u2506_img">
                <img src="../assets/img/u267.png" alt />
              </div>
            </div>
            <div class="u2507">
              <div class="u2507_img">
                <img src="../assets/img/u268.png" alt />
              </div>
            </div>
            <div class="u2508">
              <input class="u2508_input" type="text" placeholder="请输入管理员姓名、工号或部门" />
            </div>
          </div>
          <div class="u2509">
            <div class="u2509_div">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                  <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                </el-table-column>
                <el-table-column prop="number" label="工号" width="120"></el-table-column>
                <el-table-column prop="photo" label="手机" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="状态" show-overflow-tooltip>
                  <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                </el-table-column>
                <el-table-column prop="address" label="操作" show-overflow-tooltip>
                  <i class="el-icon-edit-outline">编辑</i>&nbsp;
                  <i class="el-icon-delete">删除</i>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shrink: true,
      collapse: true,
      value: true,
      tableData: [
        {
          name: "扫地僧",
          number: "20180609001",
          photo: "18854138799"
        },
        {
          name: "扫地僧",
          number: "20180609001",
          photo: "18854138799"
        },
        {
          name: "扫地僧",
          number: "20180609001",
          photo: "18854138799"
        },
        {
          name: "扫地僧",
          number: "20180609001",
          photo: "18854138799"
        },
        {
          name: "扫地僧",
          number: "20180609001",
          photo: "18854138799"
        },
        {
          name: "扫地僧",
          number: "20180609001",
          photo: "18854138799"
        },
        {
          name: "扫地僧",
          number: "20180609001",
          photo: "18854138799"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    // 侧边栏收缩
    collapseChage() {
      this.collapse = !this.collapse;
      this.shrink = !this.shrink;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: rgba(255, 255, 255, 1);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgba(255, 255, 255, 1);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}

.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 60px;
  color: #333;
}

.header .logo {
  float: left;
  width: 250px;
  line-height: 60px;
}

.header-right {
  float: right;
  padding-right: 50px;
}

.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}

.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}

.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}

.btn-bell .el-icon-bell {
  color: #fff;
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.header-name {
  font-size: 15px;
  color: #333;
  text-indent: 20px;
}

.adise_img1 {
  border-width: 0px;
  position: absolute;
  left: 26px;
  top: 38px;
  width: 42px;
  height: 42px;
  img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 42px;
    height: 42px;
  }
}

.adise_img2 {
  border-width: 0px;
  position: absolute;
  left: 68px;
  top: 27px;
  width: 100px;
  height: 63px;
  img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100px;
    height: 63px;
  }
}

.adise_text {
  border-width: 0px;
  position: absolute;
  left: 33px;
  top: 30px;
  width: 121px;
  height: 28px;
  font-family: "PingFang SC Medium", "PingFang SC";
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  color: #333333;
}

// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 200px;
//   min-height: 400px;
// }

.adise_home_img {
  border-width: 0px;
  position: absolute;
  left: 26px;
  top: 190px;
  width: 20px;
  height: 20px;
  img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 20px;
  }
}

.adise_home_text {
  border-width: 0px;
  position: absolute;
  left: 80px;
  top: 102px;
  width: 29px;
  white-space: nowrap;
  color: #2561ef;
}

.adise_staff_img {
  border-width: 0px;
  position: absolute;
  left: 26px;
  top: 250px;
  width: 20px;
  height: 20px;
  img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 20px;
  }
}

.adise_staff_text {
  border-width: 0px;
  position: absolute;
  left: 80px;
  top: 162px;
  width: 29px;
  white-space: nowrap;
  color: #2561ef;
}

.adise_tofw_img {
  border-width: 0px;
  position: absolute;
  left: 26px;
  top: 310px;
  width: 20px;
  height: 20px;
  img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 20px;
  }
}

.adise_tofw_text {
  border-width: 0px;
  position: absolute;
  left: 80px;
  top: 222px;
  width: 29px;
  white-space: nowrap;
  color: #2561ef;
}

.adise_statement_img {
  border-width: 0px;
  position: absolute;
  left: 26px;
  top: 370px;
  width: 20px;
  height: 20px;
  img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 20px;
  }
}

.adise_statement_text {
  border-width: 0px;
  position: absolute;
  left: 80px;
  top: 282px;
  width: 29px;
  white-space: nowrap;
  color: #2561ef;
}

.adise_set_img {
  border-width: 0px;
  position: absolute;
  left: 26px;
  top: 430px;
  width: 20px;
  height: 20px;
  img {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20px;
    height: 20px;
  }
}

.adise_set_text {
  border-width: 0px;
  position: absolute;
  left: 80px;
  top: 342px;
  width: 29px;
  white-space: nowrap;
  color: #2561ef;
}

// 系统设置页面
.u2498_text {
  position: absolute;
  left: 240px;
  top: 107px;
  width: 101px;
  height: 24px;
  font-family: "PingFang SC Medium", "PingFang SC";
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  color: rgb(51, 51, 51);
  border-width: 0px;
}
.u2500 {
  position: absolute;
  left: 403px;
  top: 108px;
  width: 87px;
  height: 32px;
  font-family: "PingFang SC Medium", "PingFang SC";
  font-weight: 500;
  font-style: normal;
  color: rgb(37, 97, 239);
  border-width: 0px;
  img {
    position: absolute;
    left: -27px;
    top: -27px;
    width: 147px;
    height: 92px;
    border-width: 0px;
  }
  .u2500_text {
    position: absolute;
    left: 12px;
    top: 5px;
    width: 83px;
    overflow-wrap: break-word;
    border-width: 0px;
  }
}
.u2501 {
  position: absolute;
  left: 422px;
  top: 117px;
  width: 13px;
  height: 13px;
  border-width: 0px;
  img {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 13px;
    height: 13px;
    border-width: 0px;
  }
}
.u2503 {
  position: absolute;
  left: 525px;
  top: 108px;
  width: 119px;
  height: 32px;
  font-family: "PingFang SC Medium", "PingFang SC";
  font-weight: 500;
  font-style: normal;
  color: rgb(37, 97, 239);
  border-width: 0px;
  img {
    position: absolute;
    left: -27px;
    top: -27px;
    width: 179px;
    height: 92px;
    border-width: 0px;
  }
  .u2503_text {
    position: absolute;
    left: 12px;
    top: 5px;
    width: 115px;
    overflow-wrap: break-word;
    border-width: 0px;
  }
}
.u2504 {
  position: absolute;
  left: 547px;
  top: 116px;
  width: 13px;
  height: 15px;
  border-width: 0px;
  img {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 13px;
    height: 15px;
    border-width: 0px;
  }
}
.u2506 {
  position: absolute;
  left: 1210px;
  top: 110px;
  width: 24px;
  height: 26px;
  color: rgb(255, 255, 255);
  border-width: 0px;
  img {
    position: absolute;
    left: -18px;
    top: -18px;
    width: 64px;
    height: 66px;
    border-width: 0px;
  }
}
.u2507 {
  position: absolute;
  left: 1240px;
  top: 139px;
  width: 249px;
  height: 2px;
  border-width: 0px;
  img {
    position: absolute;
    left: -19px;
    top: -19px;
    width: 292px;
    height: 45px;
    border-width: 0px;
  }
}
.u2508 {
  position: absolute;
  left: 1240px;
  top: 107px;
  width: 248px;
  height: 27px;
  border-width: 0px;
  .u2508_input {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 248px;
    height: 27px;
    background-color: transparent;
    font-family: "PingFang SC Medium", "PingFang SC";
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    color: rgb(51, 51, 51);
    text-align: left;
    outline-style: none;
    text-decoration: none;
    border-color: transparent;
  }
}
.u2509 {
  position: absolute;
  left: 240px;
  top: 168px;
  width: 1283px;
  height: 630px;
  color: rgb(30, 30, 30);
  border-width: 0px;
  .u2509_div {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1255px;
    height: 630px;
    box-shadow: rgba(153, 153, 153, 0.35) 2px 2px 10px;
    color: rgb(30, 30, 30);
    background: inherit inherit inherit inherit inherit inherit inherit inherit
      inherit;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 8px;
  }
}
</style>
