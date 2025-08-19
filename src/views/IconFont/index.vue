<script lang="ts" setup></script>

<template>
    <div class="icon-container">
        <div>阿里图标库的使用</div>

        <div class="use-item">
            通过Unicode方式使用：
            <i class="iconfont" style="font-size: 30px">&#xe60c;</i>
        </div>
        <div class="use-item">
            通过Unicode方式使用(目前也改变不了颜色不知道什么问题)：
            <span class="iconfont" style="font-size: 30px; color: #00ff00">&#xe76c;</span>
        </div>
        <div class="use-item">
            通过font-class方式使用：
            <span class="iconfont icon-daishenhe" style="font-size: 30px"></span>
        </div>
        <div class="use-item">
            通过font-class方式使用(不可以改颜色)：
            <span class="iconfont icon-my" style="font-size: 30px; color: skyblue"></span>
        </div>

        <div class="use-item">
            通过symbol方式使用(可以改图标大小和颜色)：
            <svg class="icon" aria-hidden="true" style="font-size: 30px; color: plum">
                <use xlink:href="#icon-my"></use>
            </svg>
        </div>
        <div class="use-item">
            通过symbol方式封装svg-icon组件使用
            <svg-icon icon-name="icon-dianzan_kuai" style="font-size: 30px; color: red"></svg-icon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.icon-container {
    margin: 20px;
    .use-item {
        display: flex;
        align-items: center;

        margin: 10px 0;
    }
}
</style>
