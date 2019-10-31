<template>

    <div class="sidebar">
        <!--default-active当前激活的状态是系统首页  -->
        <!--collapse是否水平折叠收起菜单  -->
        <!-- unique-opened是否只保持一个子菜单的展开，默认为false -->
        <!-- router：是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#ffffff"
            active-text-color="#20a0ff" unique-opened router>
            <el-menu-item class="delbg">
                <div class="sidebar-imgdiv">
                    <img class="sidebar-img01" src="../assets/img/logo1.png" alt />
                    <span slot="title"><img class="sidebar-img02" src="../assets/img/logo2.png" alt /></span>
                </div>
            </el-menu-item>

            <el-menu-item class="delbg">
                <span slot="title">
                    <div class="headertitle">薪资管理系统</div>
                </span>
            </el-menu-item>
            <div style="margin-top:30px"></div>
            <template v-for="item in items">
                <template>
                    <el-menu-item class="sidebar-item" :index="item.index" :key="item.index">
                        <img class="sidebar-item-img" :src="item.imgurl" alt="">
                        <span slot="title">{{item.title}}</span>

                    </el-menu-item>
                </template>
            </template>

        </el-menu>
    </div>
</template>

<script>
    import bus from "./bus";
    export default {
        data() {
            return {
                collapse: false,
                items: [{
                        imgurl: require("../assets/img/sidebarimg/shouye.png"),
                        index: "indextest",
                        title: "首页",
                    },
                    {
                        imgurl: require("../assets/img/sidebarimg/yuangong.png"),
                        index: "user",
                        title: "员工管理",
                    },
                    {
                        imgurl: require("../assets/img/sidebarimg/tongji.png"),
                        index: "attendance",
                        title: "出勤统计",
                    },
                    {
                        imgurl: require("../assets/img/sidebarimg/baobiao.png"),
                        index: "baobiao",
                        title: "工资报表",
                    },
                    {
                        imgurl: require("../assets/img/sidebarimg/shezhi.png"),
                        index: "setting",
                        title: "系统设置",
                    },
                ]
            };
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace("/", "");
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on("collapse", msg => {
                this.collapse = msg;
                bus.$emit("collapse-content", msg);
            });
        }
    };
</script>

<style scoped lang="less">
    .delbg {
        background: white !important;

        &:hover {
            background: white !important;
        }
    }

    .sidebar-item {
        display: block;
        width: 100%;
        border-left: 5px solid white;
        box-sizing: border-box;
        color: blue;

        &:hover {
            border-left: 5px solid blue;
            background: #f1f5fd !important;
        }

        span {
            color: #2561ef;
            font-size: 16px;
        }
    }

    // 激活菜单项实现动态更换背景色
    .el-menu-item.is-active {
        color: #6681FA;
        background-color: #EAEEFF !important;
        border-left: 5px solid blue;
    }

    .sidebar-imgdiv {
        margin-top: 34px;

        .sidebar-img01 {
            width: 42px;
            height: 42px;
            position: absolute;
            top: 8px;
            left: 16px;
        }

        .sidebar-img02 {
            width: 100px;
            height: 63px;
        }

    }

    .headertitle {
        position: absolute;
        left: 26px;
        margin-top: 20px;
        color: black;
        font-size: 22px;
    }

    .sidebar-item-img {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 15px;
        left: 20px;
    }

    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 0px;
        bottom: 0;
        overflow-y: scroll;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.349019607843137);
        z-index: 3;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    /* 不是el-menu--collapse所有sidebar-el-menu宽度为250px */
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }

    .sidebar>ul {
        height: 100%;
    }
</style>