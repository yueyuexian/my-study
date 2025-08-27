<template>
    <div>
        <!-- <h1>首页 -- {{ state }}</h1>
        <h3>名字 -- {{ userInfo.name }}</h3>
        <h3>年龄 -- {{ userInfo.age }}</h3>
        <button @click="state++">+1</button>
        <button @click="changeName('月')">改名</button> -->
        <router-link to="/test/123">params传参(声明式)</router-link>
        <button @click="$router.push({ name: 'params传参', params: { id: 123 } })">
            params传参(编程式)
        </button>
    </div>

    <button @click="$router.push({ name: 'render' })">渲染页</button>
    <br />
    <br />
    <button @click="$router.push({ name: 'menu' })">菜单组件</button>
    <br /><br />
    <button @click="$router.push({ name: 'float' })" style="margin-right: 20px">
        float浮动布局
    </button>
    <button @click="$router.push({ name: 'flex' })">flex弹性布局</button>
    <br /><br />
    <button @click="$router.push({ name: 'iconFont' })">iconFont图标字体</button>
    <br /><br />
    <button @click="$router.push({ name: 'treeTransfer' })">列表数据转换成树形数据</button>
    <br /><br />
    <button @click="$router.push({ name: 'ts封装axios' })">ts封装axios</button>
    <br /><br />
    <button @click="$router.push({ name: '自动导入' })">unplugin-auto-import自动导入api</button>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
// shallowRef 浅层响应式ref,只有xx.value变化时才会触发更新
const state = shallowRef(4)
const userInfo = shallowRef({
    name: 'lqx',
    age: 18
})
const changeName = (name: string): void => {
    userInfo.value.name = name
    console.log(userInfo)
}
</script>

<style scoped>
button {
    border: 3px solid transparent;
    height: 30px;
}
button:hover {
    border: 3px solid red;
}
</style>
