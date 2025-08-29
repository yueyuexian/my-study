import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test/:id?',
        name: 'params传参',
        component: () => import('../components/TestParams.vue')
    },
    {
        path: '/testProps',
        name: 'testProps',
        component: () => import('../views/Test.vue')
    },
    {
        path: '/exportImport',
        name: 'exportImport',
        component: () => import('../views/ExportImport/index.vue')
    },
    {
        path: '/render',
        name: 'render',
        component: () => import('@/views/Render/index.vue')
    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('@/views/Menu/index.vue')
    },
    {
        path: '/flex',
        name: 'flex',
        component: () => import('@/views/Flex/index.vue')
    },
    {
        path: '/float',
        name: 'float',
        component: () => import('@/views/Float/index.vue')
    },
    {
        path: '/iconFont',
        name: 'iconFont',
        component: () => import('@/views/IconFont/index.vue')
    },
    {
        path: '/treeTransfer',
        name: 'treeTransfer',
        component: () => import('@/views/Tree/index.vue')
    },
    {
        path: '/axios-ts',
        name: 'ts封装axios',
        component: () => import('@/views/AxiosTs/index.vue')
    },
    {
        path: '/zhuangshiqi',
        name: '装饰器',
        component: () => import('@/views/Zhuangshiqi/index.vue')
    },
    {
        path: '/autoImport',
        name: '自动导入',
        component: () => import('@/views/AutoImport/index.vue')
    },
    {
        path: '/set-map',
        name: 'Set集合和Map映射',
        component: () => import('@/views/Set-Map/index.vue')
    },
    {
        path: '/promise-myAll',
        name: '手写Promise.myAll方法',
        component: () => import('@/views/Promise-myAll/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
