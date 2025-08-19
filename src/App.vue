<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import Son from './components/Son.vue'
import { onClickOutside, useIntersectionObserver } from '@vueuse/core'
import img from '@/assets/images/wechat_2025-07-17_155445_361.png'
const ulRef = ref(null)
const isShow = ref(false)
onClickOutside(ulRef, () => {
    isShow.value = false
})

const count = ref(0)
const sonRef = ref<InstanceType<typeof Son>>()
const divRef = ref<HTMLDivElement>()
const dataIndex = ref(0)

const imgRef = ref<HTMLImageElement>()
const { stop } = useIntersectionObserver(imgRef, ([entry], observerElement) => {
    console.log('-------')

    if (entry.isIntersecting) {
        nextTick(() => {
            imgRef.value!.src = img
            stop() // 图片加载完成后，停止监听
        })
    }
})
const baseUrl = ref(import.meta.env.BASE_URL)
onMounted(() => {})
</script>

<template>
    <transition>
        <router-view />
    </transition>
    <!-- <Son ref="sonRef"></Son> -->
    <!-- <div>{{ count }} -- {{ dataIndex }}</div>
    <div :data-index="1" ref="divRef"></div> -->
    <!-- <div>{{ baseUrl }}</div> -->

    <!-- <ul>
        <li>
            <img src="@/assets/images/image.png" alt="" />
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>9</li>
        <li>9</li>
        <li>9</li>
        <li>9</li>
        <li>9</li>
        <li>9</li>
        <li>9</li>
        <li>9</li>
        <li><img ref="imgRef" /></li>
    </ul> -->
</template>

<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.text {
    width: 200px;
    height: 200px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    background-color: skyblue;
    font-size: 24px;
}
* {
    margin: 0;
    padding: 0;
}
ul {
    width: 300px;
    list-style: none;
    padding: 10px;
    background-color: pink;
}
ul li {
    padding: 10px;
}
ul li:hover {
    background-color: skyblue;
}
</style>
