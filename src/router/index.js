import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/indextest'
    },
    {
        path: '/',
        name: 'layout',
        component: Layout,
        children: [{
                path: '/indextest',
                component: () => import( /* webpackChunkName: "user" */ '../views/IndexTest.vue'),
                meta: {
                    title: '首页'
                }
            }, {
                path: '/user',
                component: () => import( /* webpackChunkName: "user" */ '../views/User.vue'),
                meta: {
                    title: '员工管理'
                }
            },
            {
                path: '/setting',
                name: 'setting',
                component: () => import( /* webpackChunkName: "setting" */ '../views/Setting.vue'),
                meta: {
                    title: '设置页面'
                },

            },
            {
              path: '/addadmin',
              name: 'addadmin',
              component: () => import( /* webpackChunkName: "setting" */ '../views/Addadmin.vue'),
              meta: {
                  title: '新增管理员'
              },  
          },
            {
                path: '/attendance',
                name: 'attendance',
                component: () => import( /* webpackChunkName: "attendance" */ '../views/Attendance.vue'),
                meta: {
                    title: '出勤统计'
                }
            },
            {
                path: '/statistics',
                name: 'statistics',
                component: () => import( /* webpackChunkName: "attendance" */ '../views/Statistics.vue'),
                meta: {
                    title: '工资报表'
                }
            },
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '../views/Register.vue')
    },
    {
        path: '/forget',
        name: 'forget',
        component: () => import( /* webpackChunkName: "forget" */ '../views/Forget.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "forget" */ '../views/Login.vue'),
        meta: {
            title: '登录页'
        }
    }
]
const router = new VueRouter({
    routes
})

export default router