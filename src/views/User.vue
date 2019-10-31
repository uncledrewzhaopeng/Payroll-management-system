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
            <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>

                <el-table-column prop="name" label="姓名">
                </el-table-column>
                <el-table-column prop="number" label="工号">
                </el-table-column>
                <el-table-column prop="branch" label="部门">
                </el-table-column>
                <el-table-column prop="phone" label="手机">
                </el-table-column>
                <el-table-column prop="email" label="邮箱">
                </el-table-column>
                <el-table-column prop="edu" label="学历">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="text-align: center;margin-top: 30px;">
                <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
                </el-pagination>
            </div>

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
                total: 100,
                pagesize: 10,
                currentPage: 1,
                tableData: [{
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: '18854138756',
                    email: '18854138756@163.com',
                    edu: "本科"
                }]
            }
        },
        components: {},
        methods: {
            handleClick(row) {
                console.log(row);
            },
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        },
    }
</script>

<!-- style -->
<style lang="less">
    .el-table {
        height: 400px;
        // overflow:scroll;
    }

    // 表格字体居中
    .el-table td,
    .el-table th {
        text-align: center !important;
    }

    // 表格字体变大
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
        margin: 20px 0px 20px 0px;
        position: relative;

        .usertitle {
            font-size: 24px;
            margin-left: 30px;
            margin-right: 30px;
        }

        .btn {
            margin: 0px 30px 0px 30px;
            border: 1px solid #2a65ef;
            color: #2a65ef;
            font-size: 16px;

            &:hover {
                background: blue;
                color: white;
                font-size: 16px;
            }
        }

        .search {
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
            border-bottom: 3px solid blue;

            &::-webkit-input-placeholder {
                /* WebKit browsers */
                color: #999;
                font-size: 18px;
            }
        }

    }
</style>