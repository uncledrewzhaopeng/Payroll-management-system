<template>
  <div class="EditAddend">
    <!--面包屑-->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">薪资管理系统</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/setting' }">工资报表</el-breadcrumb-item>
        <el-breadcrumb-item>编辑出勤</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="manage">
      <span>编辑出勤</span>
    </div>
    <div class="container">
      <div class="container_img">
        <img src="../assets/img/u1555.png" alt />
      </div>
      <div class="container_text">
        <span>
          出勤情况-
          <span class="little">2018年8月</span>
        </span>
      </div>
      <div class="container_frame">
        <div class="container_column">
          <span>姓名*</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>部门*</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>请假天数</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
      </div>
      <div class="container_frame">
        <div class="container_column">
          <span>应出勤天数</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>实际出勤天数</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>基本工资</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
      </div>
      <div class="container_frame">
        <div class="container_column">
          <span>岗位工资</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>应发工资</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>绩效工资</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
      </div>
      <div class="container_frame">
        <div class="container_column">
          <span>违规扣款</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>社保扣款</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>全勤奖</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
      </div>
      <div class="container_frame">
        <div class="container_column">
          <span>加班天数</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>加班费</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
        <div class="container_column">
          <span>其它</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
      </div>
      <div class="container_frame2">
        <div class="container_column2">
          <span>实发工资</span>
          <el-input v-model="input" placeholder></el-input>
        </div>
      </div>
      <div class="container_save">
        <div class="save_text">
          <span>保存</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
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
    .little {
      font-size: 14px;
    }
  }
}

.container_frame {
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  margin-top: 20px;
  padding-left: 90px;
  // margin: 0 auto;
  .container_column {
    flex: 1;
    padding: 0 80px;
    span {
      position: relative;
      right: 155px;
      top: 25px;
    }
  }
}

.container_frame2 {
  display: flex;
  flex-wrap: wrap;
  width: 360px;
  margin-top: 20px;
  padding-left: 90px;
  margin-bottom: 100px;
  .container_column2 {
    flex: 1;
    padding: 0 80px;
    span {
      position: relative;
      left: -157px;
      top: 25px;
    }
  }
}

.container_save {
  position: absolute;
  left: 530px;
  top: 620px;
  font-size: 16px;
  .save_text {
    width: 280px;
    height: 40px;
    background-color: rgba(37, 97, 239, 1);
    border-radius: 5px;
    box-shadow: 0px 2px 20px rgba(37, 97, 239, 0.827450980392157);
    font-size: 16px;
    span {
      color: #fff;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>