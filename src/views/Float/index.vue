<script lang="ts" setup></script>

<!-- <template>
    <div class="float-container">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
        </ul>
    </div>
</template> -->
<template>
    <div class="float-container">
        <ul>
            <li>
                <div>1</div>
            </li>
            <li>
                <div>2</div>
            </li>
            <li>
                <div>3</div>
            </li>
            <li>
                <div>4</div>
            </li>
            <li>
                <div>5</div>
            </li>
            <li>
                <div>6</div>
            </li>
            <li>
                <div>7</div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
ul {
    list-style: none;
}
// .float-container {
//     width: 80%;
//     margin: 20px auto;
//     background-color: #dbd8d8;
//     height: 800px;
//     ul {
//         height: 100%;
//         li {
//             float: left;
//             width: calc((100% - 60px) / 4);
//             height: 250px;
//             margin: 0 10px 20px;
//             // 背景渐变 0deg是向上，按顺时针方向角度变大，90deg是从左往右
//             background: linear-gradient(90deg, #e6a8e6 0%, #f063f0 50%, #e68de6 100%);
//             &:nth-child(4n + 1) {
//                 // 第一列
//                 margin-left: 0;
//             }
//             &:nth-child(4n) {
//                 // 第四列（最后一列）
//                 margin-right: 0;
//             }
//         }
//     }
// }

.float-container {
    width: 80%;
    margin: 20px auto;
    background-color: #dbd8d8;
    height: 800px;
    ul {
        height: 100%;
        li {
            float: left;
            box-sizing: border-box;
            width: 25%; // 直接使用25%
            height: 250px;
            margin-bottom: 20px;
            padding: 0 10px;
            background-color: #f18686;
            &:nth-child(4n + 1) {
                // 第一列
                padding-left: 0;
            }
            &:nth-child(4n) {
                // 第四列（最后一列）
                padding-right: 0;
            }
            div {
                height: 100%;
                // 背景渐变 0deg是向上，按顺时针方向角度变大，90deg是从左往右
                background: linear-gradient(90deg, #e6a8e6 0%, #f063f0 50%, #e68de6 100%);
            }
        }
    }
}
</style>
