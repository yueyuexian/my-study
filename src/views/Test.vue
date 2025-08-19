<script lang="ts" setup>
import TestSon from '@/views/TestSon.vue'
import { ref } from 'vue'
const count = ref(3)
const addCount = () => {
    count.value++
}
</script>

<template>
    <div><TestSon :count="count"></TestSon> <button @click="addCount">+1</button></div>
</template>

<style lang="scss" scoped></style>
