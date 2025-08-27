<script lang="ts" setup>
// 自动导入 ref
const count = ref(0)
</script>

<template>
    <div>
        <h2>当前count：{{ count }}</h2>
        <button @click="count++">+1</button>
    </div>
</template>

<style lang="scss" scoped></style>
