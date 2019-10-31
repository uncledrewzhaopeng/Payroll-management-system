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
            <el-button icon="el-icon-lx-daochu" class="btn" round @click="exportExcel">导出</el-button>
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
                <el-table-column prop="education" label="学历">
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                    <el-button type="text" icon="el-icon-edit" size="large">编辑</el-button>
                    <el-button type="text" icon="el-icon-delete-solid" size="large" @click="del">删除</el-button>
                </el-table-column>
            </el-table>
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
                total: 100,
                currentPage: 1,
                pageSize: 20,
                tableData: [{
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: "18854138756",
                    email: "18854138756@163.com",
                    education: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: "18854138756",
                    email: "18854138756@163.com",
                    education: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: "18854138756",
                    email: "18854138756@163.com",
                    education: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: "18854138756",
                    email: "18854138756@163.com",
                    education: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: "18854138756",
                    email: "18854138756@163.com",
                    education: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: "18854138756",
                    email: "18854138756@163.com",
                    education: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: "18854138756",
                    email: "18854138756@163.com",
                    education: "本科"
                }, {
                    name: '王小虎',
                    number: "20180609001",
                    branch: '技术部',
                    phone: "18854138756",
                    email: "18854138756@163.com",
                    education: "本科"
                }, ]
            }
        },
        components: {},
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (rowIndex % 2 == 1) {
                    return 'warning-row';
                } else if (rowIndex % 2 == 0) {
                    return 'success-row';
                }
                return '';
            },
            del() {
                console.log(11111111111)
            },
            changePage(val) {
                console.log(val);
            },
            exportExcel() {
                require.ensure([], () => {
                    const {
                        export_json_to_excel
                    } = require('../assets/excel/Export2Excel');
                    // 设置Excel的表格第一行的标题
                    const tHeader = ['姓名', '工号', '部门', '手机', "邮箱", "学历"];
                    // index、nickName、name是tableData里对象的属性
                    const filterVal = ['name', 'number', 'branch','phone', 'email', 'education',];
                    //把data里的tableData存到list
                    const list = this.tableData;
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '员工excel');
                })
            },

            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }
        },
    }
</script>

<!-- style -->
<style lang="less">


    /*表格居中*/
    .el-table th,
    .el-table td {
        text-align: center;
    }

    // 表格字体变大
    .el-table .cell {
        font-size: 14px;
    }

    // 斑马纹
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