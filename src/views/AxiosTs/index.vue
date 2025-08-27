<script lang="ts" setup>
import { getUserInfoService } from '@/api/user'
import { onMounted, ref } from 'vue'
import type { UserInfoRes } from '@/api/user/types'
import { getUserInfoService2, getUserInfoApi } from '@/api/user/index2'

const userInfo = ref<UserInfoRes>()
const getUserInfo = async () => {
    try {
        const res = await getUserInfoService()
        const res2 = await getUserInfoService2()
        const res3 = await getUserInfoApi()
        console.log(res)
        console.log(res2)
        console.log(res3)

        userInfo.value = res
    } catch (error) {}
}
onMounted(() => {
    getUserInfo()
})
</script>

<template>
    <div>
        <h3>用户信息：</h3>
        <div>
            <img :src="userInfo?.avatar" style="width: 50px; height: 50px; border-radius: 50%" />

            <p>用户名id：{{ userInfo?.id }}</p>
            <p>用户名：{{ userInfo?.username }}</p>
            <p>描述：{{ userInfo?.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
