<script lang="ts" setup>
import { h } from 'vue'
const content = h(
    'div',
    {
        style: {
            color: 'red'
        }
    },
    [h('button', '点击我'), h('a', '我是a链接')]
)
</script>

<template>
    <content />
</template>

<style lang="scss" scoped></style>
