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
        },{
            path: '/user',
            component: () => import( /* webpackChunkName: "user" */ '../views/User.vue'),
            meta: {
                title: '员工管理'
            }
        }]
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
        component: () => import( /* webpackChunkName: "forget" */ '../views/Login.vue')
    }
]
const router = new VueRouter({
    routes
})

export default router