<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">侧边栏</el-aside>
      <el-container>
        <el-header>头部</el-header>
        <el-main>
          <!-- 所有页面都在main里展示，共用侧边栏和头部 -->
          所有页面都在main里展示，共用侧边栏和头部
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style lang="less">
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  overflow-y: auto;
  line-height: 1200px; // 测试用，之后删除
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 1160px; // 测试用，之后删除
  overflow-y: auto;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
