<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
    iconName: { type: String, required: true }, //iconfont中的名字
    className: { type: String, default: '' } // 添加自定义类名
})

const svgClass = computed(() => {
    if (props.className) {
        return `svg-icon ${props.className}`
    } else {
        return `svg-icon`
    }
})

const iconName = computed(() => {
    return `#${props.iconName}`
})
</script>

<style lang="scss" scoped>
// 使用symbol方式，加入通用 CSS 代码
.svg-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentcolor;
}
</style>
