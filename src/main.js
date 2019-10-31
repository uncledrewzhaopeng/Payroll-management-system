import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI,{ size: 'small'});

// 引入阿里巴巴图标,小心坑哦   要放在element-ui的后面
import "./assets/css/icon.css"

Vue.config.productionTip = false

//使用钩子函数beforeEach对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `后台管理系统--${to.meta.title}`;
     // 得到登录的用户信息
     const role = localStorage.getItem('username');
    if (!role && to.path !== "/login") {
        next("/login")
    }else{
        next()
    }
})


new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
