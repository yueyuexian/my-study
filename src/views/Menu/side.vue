<!-- 递归实现侧边菜单栏 -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const props = defineProps({
    menuList: {
        type: Array<{
            name: string
            level: number
            children?: Array<{ name: string; level: number }>
        }>,

        default: () => []
    }
})
const expandList = ref<Record<string, boolean>>({})
// 初始化展开列表状态
function initExpand(list: any) {
    list.forEach((item: any) => {
        if (item.children) {
            expandList.value[item.name] = true
            initExpand(item.children)
        }
    })
}
onMounted(() => {
    initExpand(props.menuList)
})

defineOptions({
    name: 'Menu'
})
</script>

<template>
    <div class="menu">
        <div class="first-level">
            <div class="first-level-item" v-for="(item, index) in menuList" :key="index">
                <div
                    class="menu-item-content"
                    @click="expandList[item.name] = !expandList[item.name]"
                >
                    {{ item.name }}
                    <span
                        class="arrow-icon"
                        v-if="item.children"
                        :class="{ expand: expandList[item.name] }"
                    ></span>
                </div>
                <div
                    class="second-level"
                    :style="{
                        textIndent: item.level * 20 + 'px'
                    }"
                    :class="expandList[item.name] ? 'expand' : 'close'"
                >
                    <Menu :menuList="item.children" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.menu {
    width: 200px;
    height: 100%;
    background-color: #f0a7a7;

    .first-level {
        .first-level-item {
            .menu-item-content {
                display: flex;
                align-items: center;
                position: relative;
                padding: 10px;
                cursor: pointer;
                &:hover {
                    background-color: #d39c9c;
                }
                .arrow-icon {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    // background-color: #fff;
                    right: 20px;
                    margin-top: 4px;
                    border-left: 1px solid #535252;
                    border-top: 1px solid #535252;
                    transform: rotate(45deg);
                    transition: all 0.3s ease-in-out;

                    &.expand {
                        transform: rotate(-135deg);
                        margin-top: 0;
                    }
                }
            }
            .second-level {
                // text-indent: 20px;
                overflow: hidden;
                transition: all 0.3s ease-in-out;
                &.expand {
                    max-height: 1000px; // 设置一个足够大的值
                }
                &.close {
                    max-height: 0;
                }
            }
        }
    }
}
</style>
