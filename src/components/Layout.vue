<!-- template -->
<template>
  <div class="layout">
    <v-Sidebar></v-Sidebar>
    <!-- content-box， content-collapse是main.css里面的类名，当点击header的折叠的时候就向左移动-->
    <div class="content-box" :class="{'content-collapse':collapse}">
        <v-head></v-head>
      <v-tags></v-tags>
      <div class="content">
        <!-- move用于自动生成 CSS 过渡类名，mode控制离开/进入的过渡时间序列-->
        <transition name="move" mode="out-in">
          <!-- include - 字符串或正则表达式。只有名称匹配的组件会被缓存。 -->
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <!-- target触发滚动的对象到类名content -->
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<!-- script -->
<script type="text/ecmascript-6">
import vHead from "./Layout_Header.vue";
import vSidebar from "./Layout_Sidebar.vue";
import vTags from './Tags.vue';
import bus from "./bus";

export default {
  name: "layout",
  data() {
    return {
      tagsList: [],
      collapse: false
    };
  },
  components: {
    vHead: vHead,
    vSidebar: vSidebar,
    vTags
  },
  methods: {},
  created() {
    bus.$on("collapse-content", msg => {
      // window.console.log(msg)  true
      this.collapse = msg;
    });
  }
};
</script>

<!-- style -->
<style  scoped\>
</style>
