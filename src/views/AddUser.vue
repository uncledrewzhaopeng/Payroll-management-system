<!-- template -->
<template>
    <div class="adduser">
        <!--面包屑-->
        <div class="crumbs">
            <!--面包屑的分隔符为"/"-->
            <el-breadcrumb separator="/">
                <!-- 前面面包屑字体比后面的字体大 -->
                <el-breadcrumb-item :to="{ path: '/' }">薪资管理系统</el-breadcrumb-item>
                <el-breadcrumb-item>新增员工</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="usertool">
            <span class="usertitle">新增员工</span>
        </div>
        <div class="container">
            <div class="container_img">
                <img src="../assets/img/u929.png" alt />
            </div>
            <div class="container_text">
                <span>基本信息</span>
            </div>

            <div class="formcss">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
                    class="demo-ruleForm form-css">
                    <el-form-item label="姓名" prop="xingming" class="form-item-css">
                        <el-input v-model="ruleForm.xingming"></el-input>
                    </el-form-item>
                    <el-form-item label="工号" prop="gonghao" class="form-item-css">
                        <el-input v-model="ruleForm.gonghao"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" prop="bumen" class="form-item-css">
                        <el-input v-model="ruleForm.bumen"></el-input>
                    </el-form-item>
                    <el-form-item label="职位" prop="zhiwei" class="form-item-css">
                        <el-input v-model="ruleForm.zhiwei"></el-input>
                    </el-form-item>
                    <el-form-item label="入职日期" prop="ruzhiriqi" class="form-item-css">
                        <el-input v-model="ruleForm.ruzhiriqi"></el-input>
                    </el-form-item>
                    <el-form-item label="转正日期" prop="zhuanzhengriqi" class="form-item-css">
                        <el-input v-model="ruleForm.zhuanzhengriqi"></el-input>
                    </el-form-item>
                    <el-form-item label="手机" prop="shouji" class="form-item-css">
                        <el-input v-model="ruleForm.shouji"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="youxiang" class="form-item-css">
                        <el-input v-model="ruleForm.youxiang"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="是否签订劳动合同" prop="hetong" class="form-item-css">
                        <el-input v-model="ruleForm.hetong"></el-input>
                    </el-form-item> -->
                    <el-form-item label="是否签订劳动合同" prop="hetong" class="form-item-css">
                        <el-select v-model="ruleForm.hetong">
                            <el-option label="是" value="是"></el-option>
                            <el-option label="否" value="否"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出生日期" prop="chushengriqi" class="form-item-css">
                        <el-input v-model="ruleForm.chushengriqi"></el-input>
                    </el-form-item>
                    <el-form-item label="籍贯" prop="jiguan" class="form-item-css">
                        <el-input v-model="ruleForm.jiguan"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业院校" prop="biyeyuanxiao" class="form-item-css">
                        <el-input v-model="ruleForm.biyeyuanxiao"></el-input>
                    </el-form-item>
                    <el-form-item label="学历" prop="xueli" class="form-item-css">
                        <el-input v-model="ruleForm.xueli"></el-input>
                    </el-form-item>
                    <el-form-item label="所学专业" prop="zhuanye" class="form-item-css">
                        <el-input v-model="ruleForm.zhuanye"></el-input>
                    </el-form-item>
                    <el-form-item label="紧急联系人电话" prop="dianhua" class="form-item-css">
                        <el-input v-model="ruleForm.dianhua"></el-input>
                    </el-form-item>
                    <el-form-item label="住址" prop="zhuzhi" class="form-item-css01">
                        <el-input v-model="ruleForm.zhuzhi"></el-input>
                    </el-form-item>
                    <el-form-item label="备注" prop="beizhu" class="form-item-css01">
                        <el-input v-model="ruleForm.beizhu"></el-input>
                    </el-form-item>

                    <el-form-item class="form-btn">
                        <div class="form-borderdiv">
                            <div class="container_img">
                                <img src="../assets/img/u929.png" alt />
                            </div>
                            <div class="container_text">
                                <span>工资信息</span>
                            </div>
                        </div>
                        <div class="form-border">
                        </div>
                    </el-form-item>
                    <el-form-item label="银行卡号" prop="kahao" class="form-item-css">
                        <el-input v-model="ruleForm.kahao"></el-input>
                    </el-form-item>
                    <el-form-item label="试用期薪资" prop="xinzi" class="form-item-css">
                        <el-input v-model="ruleForm.xinzi"></el-input>
                    </el-form-item>
                    <el-form-item label="转正薪资" prop="zhuanzhengxinzi" class="form-item-css">
                        <el-input v-model="ruleForm.zhuanzhengxinzi"></el-input>
                    </el-form-item>
                    <el-form-item label="基本工资" prop="jibengongzi" class="form-item-css">
                        <el-input v-model="ruleForm.jibengongzi"></el-input>
                    </el-form-item>
                    <el-form-item label="岗位工资" prop="gangweigongzi" class="form-item-css">
                        <el-input v-model="ruleForm.gangweigongzi"></el-input>
                    </el-form-item>
                    <el-form-item label="绩效工资" prop="jixiaogongzi" class="form-item-css">
                        <el-input v-model="ruleForm.jixiaogongzi"></el-input>
                    </el-form-item>
                    <el-form-item label="社保扣款" prop="shebaokoukuan" class="form-item-css">
                        <el-input v-model="ruleForm.shebaokoukuan"></el-input>
                    </el-form-item>

                    <el-form-item class="form-btn">
                        <el-button class="btncss" type="primary" @click="submitForm('ruleForm')">保存</el-button>
                    </el-form-item>

                </el-form>

            </div>

        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    export default {
        name: "adduser",
        data() {
            return {
                ruleForm: {
                    xingming: '',
                    gonghao: '',
                    bumen: '',
                    zhiwei: '',
                    ruzhiriqi: '',
                    zhuanzhengriqi: '',
                    shouji: '',
                    youxiang: '',
                    hetong: '是',

                    chushengriqi: '',
                    jiguan: '',
                    biyeyuanxiao: '',
                    xueli: '',
                    zhuanye: '',
                    dianhua: '',
                    zhuzhi: '',
                    beizhu: '',

                    kahao: '',
                    xinzi: '',
                    zhuanzhengxinzi: '',
                    jibengongzi: '',
                    gangweigongzi: '',
                    jixiaogongzi: '',
                    shebaokoukuan: '',
                },
                rules: {
                    xingming: [{
                        required: true,
                        message: '请输入姓名',
                        trigger: 'blur'
                    }],
                    gonghao: [{
                        required: true,
                        message: '请输入工号',
                        trigger: 'blur'
                    }],
                    bumen: [{
                        required: true,
                        message: '请输入部门',
                        trigger: 'blur'
                    }],

                    kahao: [{
                        required: true,
                        message: '请输入银行卡号',
                        trigger: 'blur'
                    }],
                    jibengongzi: [{
                        required: true,
                        message: '请输入基本工资',
                        trigger: 'blur'
                    }],
                    gangweigongzi: [{
                        required: true,
                        message: '请输入岗位工资',
                        trigger: 'blur'
                    }],

                    jixiaogongzi: [{
                        required: true,
                        message: '请输入绩效工资',
                        trigger: 'blur'
                    }],
                    shebaokoukuan: [{
                        required: true,
                        message: '请输入社保扣款',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<!-- style -->
<style lang="less">
    .form-borderdiv {
        // margin-left: -110px;
        position: relative;
    }

    .form-border {
        width: 1230px;
        border-bottom: 1px solid #ddd;
        position: absolute;
        left: 115px;
        padding-top: 4px;
    }

    .el-form demo-ruleForm {
        width: 100%;
        height: 100%;
    }

    .formcss {
        margin-top: 30px;

        .form-css {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            .form-item-css {
                width: 33%;
                .el-input__inner {
                    width: 278px !important;
                    height: 40px !important;
                    margin-bottom: 20px;
                    border: 2px solid #dddddd !important;
                }
            }

            .form-item-css01 {
                .el-input__inner {
                    margin-right: 7px;
                    width: 500px !important;
                    height: 40px !important;
                    margin-bottom: 20px;
                    border: 2px solid #dddddd !important;
                }
            }

            .form-btn {
                width: 100%;
                height: 100%;

            }

            .btncss {
                margin-left: 600px;
                width: 280px;
                height: 40px;
            }
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
</style>