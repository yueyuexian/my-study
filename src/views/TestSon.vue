<script lang="ts" setup>
const props = defineProps({
    count: {
        type: Number,
        default: 0
    }
})

setInterval(() => {
    console.log(props.count)
}, 1000)
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped></style>
