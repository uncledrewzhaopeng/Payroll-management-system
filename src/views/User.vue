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
        <div class="usertool">
            <span class="usertitle">员工管理</span>
            <el-button icon="el-icon-lx-xinzeng1" class="btn" round>新增</el-button>
            <el-button icon="el-icon-delete-solid" class="btn" round>批量删除</el-button>
            <el-button icon="el-icon-lx-daochu" class="btn" round>导出</el-button>
            <div class="search">
                <i class="el-icon-lx-sousuo"></i>
                <el-input placeholder="请输入员工姓名、工号或部门" v-model="input" clearable></el-input>
            </div>
        </div>
        <div class="container">
            <el-row :gutter="20" class="c-head">
                <el-col :span="3">多选框</el-col>
                <el-col :span="3">姓名</el-col>
                <el-col :span="3">工号</el-col>
                <el-col :span="3">部门</el-col>
                <el-col :span="3">手机</el-col>
                <el-col :span="3">邮箱</el-col>
                <el-col :span="3">学历</el-col>
                <el-col :span="3">操作</el-col>
            </el-row>

            <el-row :gutter="20" class="c-item" v-for="(item, i) in arr" :key="i">
                <el-col :span="3"><el-checkbox/></el-col>
                <el-col :span="3">李明</el-col>
                <el-col :span="3">20180609001</el-col>
                <el-col :span="3">技术部</el-col>
                <el-col :span="3">18854138756
                </el-col>
                <el-col :span="3">18854138756@163.com</el-col>
                <el-col :span="3">本科</el-col>
                <el-col :span="3">
                    <el-button type="text" icon="el-icon-edit" size="large">编辑</el-button>
                    <el-button type="text" icon="el-icon-delete-solid" size="large" @click="del">删除</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-pagination v-if="total > 0" @current-change="changePage" :current-page="currentPage"
                    :page-size="pageSize" :total="total" :pager-count="5" layout="total, prev, pager, next"
                    style="float:right; margin: 25px 0 0;">
                </el-pagination>
            </el-row>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    export default {
        name: "user",
        data() {
            return {
                input: "",
                arr: [1, 2, 3, 4, 5, 6, 7, 8],
                total: 100,
                currentPage: 1,
                pageSize: 20,
            }
        },
        components: {},
        methods: {
            del(){
                console.log(11111111111)
            },
            changePage(val) {
                console.log(val);
            }
        },
    }
</script>

<!-- style -->
<style lang="less">
    // 复制过来的代码
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


    .usertool {
        display: flex;
        margin: 20px 0px 20px 0px;
        position: relative;

        .usertitle {
            font-weight: bold;
            font-size: 22px;
            margin-left: 10px;
            margin-right: 30px;
        }

        .btn {
            margin: 0px 30px 0px 30px;
            border-radius: 20px;
            border-color: #b3d8ff;
            background: #ecf5ff;
            color: #409EFF;
            font-size: 12px;

            &:hover {
                background: #409EFF;
                border-color: #409EFF;
                color: #FFF;
                font-size: 12px;
            }
        }

        .search {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            color: rgb(24, 46, 241);
            font-size: 30px;
            position: absolute;
            right: 0px;
        }

        .el-input__inner {
            border: none;
            width: 300px;
            border-radius: 0px;
            background: none;
            font-size: 16px;
            line-height: 24px;
            border-bottom: 1px solid rgb(24, 46, 241);
            margin-right: 25px;

            &::-webkit-input-placeholder {
                /* WebKit browsers */
                color: #999;
                font-size: 18px;
            }
        }

    }
</style>