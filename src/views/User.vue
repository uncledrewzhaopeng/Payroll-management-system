<!-- template -->
<template>
    <div class="user">
      <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">薪资管理系统</el-breadcrumb-item>
                <el-breadcrumb-item>员工管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            员工今天放假！ over
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
export default {
    name: "user",
    data() {
        return {}
    },
    components: {},
    methods: {}
}
</script>

<!-- style -->
<style lang="less" scoped>

</style>
