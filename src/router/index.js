import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue' //登录页面
import Home from '../views/Home.vue' //主页
import Register from '../views/Register.vue' //注册页面
import Forget from '../views/Forget.vue' //忘记密码页面
import Setting from '../views/Setting.vue' //设置页面

Vue.use(VueRouter)

const routes = [
  {
    meta:'登录页面',
    path: '/',
    name: 'login',
    component: Login
  },
  {
    meta:'注册页面',
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    meta:'忘记密码页面',
    path: '/forget',
    name: 'forget',
    component: Forget
  },
  {
    meta:'主页',
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    meta:'设置页面',
    path: '/setting',
    name: 'setting',
    component: Setting,
  },
   
]

const router = new VueRouter({
  routes
})

export default router
