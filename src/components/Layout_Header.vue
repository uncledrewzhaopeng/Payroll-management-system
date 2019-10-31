<!-- template -->
<template>
    <div class="layoutheader" :class="{'content-collapse':collapse}">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
        <!-- 用户头像，退出登录-->
        <div class="header-right">
            <div class="header-user-con">
                <div class="user-avator">
                    <img src="../assets/img/touxiang.png" />
                </div>
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{loginusername}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">

                        <el-dropdown-item icon="el-icon-s-tools" command="setting">系统设置</el-dropdown-item>

                        <el-dropdown-item icon="el-icon-caret-right" divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
    import bus from "./bus";

    export default {
        name: "layoutheader",
        data() {
            return {
                collapse: false,
                username: "杨超越"
            };
        },
        components: {},
        mounted() {
            //   如果页面的宽度小于1500就折叠
            if (document.body.clientWidth < 1500) {
                this.collapseChage();
            }
        },
        computed: {
            loginusername() {
                // 得到登陆的username，如果username为空就是username，否则就是默认值
                let username = localStorage.getItem('username');
                return username ? username : this.username;
            }
        },
        methods: {
            // 侧边栏折叠
            collapseChage() {
                this.collapse = !this.collapse;
                //（事件名称、参数）
                bus.$emit("collapse", this.collapse);
            },
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if (command == "loginout") {
                    localStorage.removeItem("username");
                    this.$router.push("/login");
                }
                 if (command == "setting") {
                    this.$router.push("/setting");
                }
            }
        }
    };
</script>

<!-- style -->
<style lang="less" scoped>
    .layoutheader {
        background-color: #ffffff;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        top: -70px;
        left: -1px;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
        line-height: 70px;
        box-shadow: 3px 2px 8px rgba(0, 0, 0, 0.349019607843137);
        z-index: 2;

        // 折叠按钮
        .collapse-btn {
            float: left;
            padding: 0 21px;
            cursor: pointer;
            line-height: 70px;

            .el-icon-s-fold {
                position: absolute;
                top: 14px;
                font-size: 40px;
                color: black;

                &:hover {
                    color: blue;

                }
            }

            .el-icon-s-unfold {
                position: absolute;
                top: 14px;
                font-size: 40px;
                color: black;

                &:hover {
                    color: blue;

                }
            }
        }

    }


    // 右侧div
    .header-right {
        float: right;
        padding-right: 50px;

        // 所有图标
        .header-user-con {
            display: flex;
            height: 70px;
            align-items: center;

            // 用户头像
            .user-avator {
                margin-left: 20px;

                // 头像图片
                img {
                    display: block;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }

            // 用户名字
            .user-name {
                margin-left: 10px;

                // 用户名
                .el-dropdown-link {
                    color: black;
                    cursor: pointer;
                }
            }
        }
    }

    .el-dropdown-menu__item {
        text-align: center;
    }
</style>