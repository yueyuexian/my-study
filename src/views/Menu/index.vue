<script lang="ts" setup>
import Menu from './side.vue'
import { ref } from 'vue'

const menuList = ref([
    {
        name: '内容管理',
        level: 1,
        children: [
            {
                name: '文章管理',
                level: 2,
                children: [
                    {
                        name: '新增文章',
                        level: 3
                    },
                    {
                        name: '文章列表',
                        level: 3
                    }
                ]
            },
            {
                name: '评论管理',
                level: 2
            },
            {
                name: '举报管理',
                level: 2
            }
        ]
    },
    {
        name: '用户管理',
        level: 1,
        children: [
            {
                name: '用户管理',
                level: 2,
                children: [
                    {
                        name: '用户列表',
                        level: 3
                    }
                ]
            },
            {
                name: '角色列表',
                level: 2
            }
        ]
    },
    {
        name: '设置',
        level: 1
    }
])
</script>

<template>
    <div style="height: 100vh">
        <Menu :menuList="menuList" />
    </div>
</template>

<style lang="scss" scoped></style>
