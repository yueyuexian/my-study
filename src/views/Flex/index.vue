<script lang="ts" setup></script>

<template>
    <div class="float-container">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <!-- <li>8</li> -->
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
//     background-color: #ebf8dc;
//     height: 800px;
//     ul {
//         height: 100%;
//         display: flex;
//         // justify-content: space-between;
//         align-content: flex-start; // flex容器默认align-content: stretch会导致行拉伸不会紧贴排列
//         gap: 0 20px;
//         flex-wrap: wrap;

//         li {
//             width: calc((100% - 60px) / 4);
//             // width: 25%;
//             // margin: 0 10px;
//             height: 250px;
//             margin-bottom: 20px;
//             background-color: pink;
//         }
//     }
// }
.float-container {
    width: 80%;
    margin: 20px auto;
    background-color: #ebf8dc;
    height: 800px;
    ul {
        height: 100%;
        display: flex;
        // justify-content: space-around;
        align-content: flex-start; // flex容器默认align-content: stretch会导致行拉伸不会紧贴排列
        // gap: 0 20px;
        flex-wrap: wrap;

        li {
            width: calc((100% - 80px) / 4);
            // width: 25%;
            margin: 0 10px;
            height: 250px;
            margin-bottom: 20px;
            background-color: pink;
        }
    }
}
</style>
