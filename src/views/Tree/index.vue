<script lang="ts" setup>
import { transferTree, transferTree2, type treeNode } from '@/utils/tree'
// import type { treeNode } from '@/utils/tree'

import { ref } from 'vue'
const list = [
    {
        id: 1,
        pid: 0,
        name: '手机'
    },
    {
        id: 2,
        pid: 0,
        name: '笔记本电脑'
    },
    {
        id: 3,
        pid: 1,
        name: '华为'
    },
    {
        id: 4,
        pid: 1,
        name: '苹果'
    },
    {
        id: 5,
        pid: 2,
        name: '天选4'
    },
    {
        id: 6,
        pid: 2,
        name: '天选5'
    },
    {
        id: 7,
        pid: 1,
        name: 'vivoX200'
    },
    {
        id: 8,
        pid: 1,
        name: '小米13'
    },
    {
        id: 9,
        pid: 2,
        name: '联想拯救者'
    },
    {
        id: 10,
        pid: 2,
        name: '无畏'
    },
    {
        id: 11,
        pid: 1,
        name: '荣耀60'
    }
]
const treeData = ref<treeNode[] | null>([])
// 1. 树结构转换：采用递归方式
treeData.value = transferTree(0, list)

// 2. 树结构转换：采用两次forEach循环遍历方式
// treeData.value = transferTree2(list)
console.log(treeData.value)
</script>

<template>
    <div class="tree">
        <div v-for="item in treeData" :key="item.id">
            {{ item.name }}
            <div v-if="item.children" class="children">
                <div v-for="child in item.children" :key="child.id" class="item">
                    {{ child.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tree {
    padding: 20px;
    font-size: 30px;
    color: rgb(248, 50, 50);
    .children {
        margin-left: 20px;
        font-size: 25px;
        color: rgb(32, 228, 163);
        .item {
            margin: 10px 0;
        }
    }
}
</style>
