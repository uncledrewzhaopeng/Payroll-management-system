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
            <el-button icon="el-icon-lx-xinzeng1" class="btn" round @click="adduser">新增</el-button>
            <el-button icon="el-icon-delete-solid" class="btn" round @click="delAll()">批量删除</el-button>
            <el-button icon="el-icon-lx-daochu" class="btn" round @click="exportExcel">导出</el-button>
            <div class="search">
                <i class="el-icon-lx-sousuo"></i>
                <el-input placeholder="请输入员工姓名、工号或部门" v-model="input" clearable></el-input>
            </div>
        </div>
        <div class="container">
            <el-table v-loading="loading" element-loading-text="loading..." element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.2)" stripe highlight-current-row
                :header-cell-style="{background:'#dddddd',color:'#606266'}" :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" width="60" align="center" fixed>
                    <template slot-scope="scope">
                        <span>{{scope.$index+(paginations.pageIndex - 1) * paginations.pageSize + 1}}</span>
                    </template>
                </el-table-column>
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="id" label="ID" v-if="show"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="number" label="工号"></el-table-column>
                <el-table-column prop="branch" label="部门"></el-table-column>
                <el-table-column prop="phone" label="手机"></el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                <el-table-column prop="education" label="学历"></el-table-column>

                <el-table-column fixed="right" label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit" size="large" @click="adduser">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete-solid" size="large"
                            @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 删除提示框 -->

            <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
                <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="delVisible = false">取 消</el-button>
                    <!--  @click="deletethisrows" -->
                    <el-button type="primary">确 定</el-button>
                </span>
            </el-dialog>
            <!--分页-->
            <div class="pagination">
                <el-row>
                    <el-col :span="24">
                        <el-pagination v-if="paginations.total > 0" :current-page="currentPage4"
                            :page-sizes="paginations.pageSizes" :page-size="paginations.pageSize"
                            :layout="paginations.layout" :total="paginations.total" @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"></el-pagination>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    import {
        getlist
    } from "../api/basetablerequest";
    export default {
        name: "user",
        data() {
            return {
                show: false, //id列的隐藏
                msg: "", //记录每一条的信息，便于取id
                delarr: [], //存放删除的数据
                multipleSelection: [], //多选的数据
                delVisible: false, //删除提示弹框的状态

                input: "",
                currentPage4: 4,
                //需要给分页组件传的信息
                tableData: [],
                loading: true,
                paginations: {
                    total: 0, // 总数
                    pageIndex: 1, // 当前页
                    pageSize: 5, // 1页显示多少条
                    pageSizes: [5, 20, 30, 50, 100, 1000], //每页显示多少条
                    layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
                }
            };
        },
        components: {},
        methods: {
            // 弹框确定删除
            // deletethisrows() {
            //     var length = this.delarr.length;
            //       var rows = this.tableData;
            //     for (let i = 0; i < length; i++) {
            //     //        var num=this.delarr[i];
            //     //    console.log(num)
            //        debugger
            //       var num =rows[i].id
            //         this.deleteRow(num, rows);
            //         this.delarr=[];
            //         this.multipleSelection=[];
            //     }
            // },
            //多行选中
            delAll() {
                this.delarr = [];
                const length = this.multipleSelection.length;
                if (length < 1) {
                    this.delVisible = false;
                    this.$message.error("请至少先选择一行！");
                } else {
                    for (let i = 0; i < length; i++) {
                        this.delarr.push(this.multipleSelection[i].id);
                    }
                    this.delVisible = false; //显示删除弹框
                }
                console.log(this.delarr);
            },
            // 单行删除
            deleteRow(index, rows) {
                // debugger;
                rows.splice(index, 1);
                var type = "success";
                this.$message({
                    showClose: true,
                    message: "成功删除信息",
                    type: type
                });
                this.delVisible = false;
            },
            // 多选
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 隔行换色的变换
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (rowIndex % 2 == 1) {
                    return "warning-row";
                } else if (rowIndex % 2 == 0) {
                    return "success-row";
                }
                return "";
            },
            // 分页每页的改变
            changePage(val) {
                console.log(val);
            },
            adduser() {
                this.$router.push("/adduser");
            },
            // 每页多少条切换
            handleSizeChange(pageSize) {
                this.paginations.pageSize = pageSize;
                this.gettablelist();
            },
            // 上下分页
            handleCurrentChange(page) {
                this.paginations.pageIndex = page;
                this.gettablelist();
            },
            gettablelist() {
                // 先准备两个传送给后台的参数，当前页，当前页显示的条数
                let pagedata = {
                    limit: this.paginations.pageSize,
                    currentpage: this.paginations.pageIndex
                };
                getlist(pagedata).then(res => {
                    this.loading = false;
                    let tabletotal = res.data.data.total;
                    let tabledata = res.data.data.tablelist;
                    this.paginations.total = tabletotal;
                    this.tableData = tabledata;
                    //  debugger
                });
            },
            // 导出功能
            exportExcel() {
                require.ensure([], () => {
                    const {
                        export_json_to_excel
                    } = require("../assets/excel/Export2Excel");
                    // 设置Excel的表格第一行的标题
                    const tHeader = ["姓名", "工号", "部门", "手机", "邮箱", "学历"];
                    // index、nickName、name是tableData里对象的属性
                    const filterVal = [
                        "name",
                        "number",
                        "branch",
                        "phone",
                        "email",
                        "education"
                    ];
                    //把data里的tableData存到list
                    const list = this.tableData;
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, "员工excel");
                });
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]));
            }
        },
        mounted() {
            this.gettablelist();
        }
    };
</script>

<!-- style -->
<style lang="less">
    .el-table {
        float: right;
    }

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
        background: #dae8fa;
    }

    .el-table .success-row {
        background: white;
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
            color: #409eff;
            background: #ecf5ff;
            border-color: #b3d8ff;
            font-size: 12px;

            &:hover {
                background: #409eff;
                border-color: #409eff;
                color: #fff;
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

    .pagination {
        .el-col-24 {
            width: 100%;
            display: flex;
            margin: 40px 0px 40px 0px;
            justify-content: flex-end;
        }
    }
</style>