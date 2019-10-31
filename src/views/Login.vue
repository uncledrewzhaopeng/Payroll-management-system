<!-- template -->
<template>
    <div class="login">
        <div class="ms-login">
            <!-- <div class="ms-logo"><img src="../assets/img/logo.png" alt=""></div> -->
            <div class="ms-title">交流分享技术性论坛</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username" clearable>
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input clearable type="password" placeholder="password" v-model="param.password"
                        @keyup.enter.native="submitForm()">
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <p class="forgetpass">
                    <a href="#" @click="forget()">忘记密码&ensp;？</a>
                </p>
                <div class="btn">
                    <el-button type="warning" @click="submitForm()">登录</el-button>
                </div>
                <div class="btn">
                    <el-button type="success" @click="register()">注册</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    export default {
        name: "login",
        data: function () {
            return {
                param: {
                    username: 'admin',
                    password: '123123',
                },
                rules: {
                    username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }],
                },
            };
        },
        methods: {
            submitForm() {
                this.$refs.login.validate(valid => {
                    if (valid) {
                        this.$message.success('登录成功');
                        // 存用户名
                        localStorage.setItem('username', this.param.username);
                        this.$router.push('/');
                    } else {
                        this.$message.error('请输入账号和密码');
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            register() {
                this.$router.push('/register');
            },
            forget() {
                this.$router.push('/forget');
            }
        },
    };
</script>

<!-- style -->
<style lang="less" scoped>
    .login {
        position: relative;
        width: 50%;
        height: 100%;
        // background: url("../assets/img/loginbg.jpg");
        background-size: 100%;
    }

    .ms-logo {
        margin-top: 20px;

        img {
            width: 25%;
            height: 10%;
        }
    }

    .ms-title {
        width: 100%;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        color: black;
        border-bottom: 1px solid #ddd;
    }

    .ms-login {
        border-width: 0px;
        position: absolute;
        left: 650px;
        top: 141px;
        width: 300px;
        height: 353px;
        font-family: 'PingFang SC Medium', 'PingFang SC';
        font-weight: 500;
        font-style: normal;
        font-size: 14px;
        color: #FFFFFF;

        .ms-login-div {
            top: 0px;
            width: 300px;
            height: 353px;
            background: inherit;
            background-color: rgba(255, 255, 255, 1);
            border: none;
            border-radius: 6px;
            -moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
            -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
        }
    }

    .ms-content {
        padding: 30px 30px;
    }

    .btn {
        text-align: center;

        button {
            width: 100%;
            height: 36px;
            margin-bottom: 10px;
        }
    }

    .forgetpass {
        font-size: 12px;
        line-height: 20px;
        float: right;
        margin-top: -10px;
        margin-bottom: 10px;

        a {
            color: #444;

            &:hover {
                color: #A52A2A
            }
        }

    }
</style>