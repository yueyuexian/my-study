<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <div>params传参 -- {{ route.params.id }}</div>
</template>

<style lang="scss" scoped></style>
