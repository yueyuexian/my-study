<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(5)
defineExpose({
    count
})
</script>

<template>
    <div>
        <h1>子组件</h1>
    </div>
</template>

<style lang="less" scoped></style>
