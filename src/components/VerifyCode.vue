<!--
 * @Author: edith Edith_luckend@163.com
 * @Date: 2022-12-08 23:28:07
 * @LastEditors: edith Edith_luckend@163.com
 * @LastEditTime: 2022-12-10 15:59:43
 * @FilePath: \time-of-year-web\src\components\VerifyCode.vue
 * @Description: login page
 * Copyright (c) 2022 by edith Edith_luckend@163.com, All Rights Reserved
-->
<template>
  <div class="verifyCodeSvg" v-html="svgData" @click="getVerifyCodeData"></div>
</template>

<script lang="ts" setup>
import { VERIFY_CODE_URL } from '@/utils/urls'
import { ref, onMounted } from 'vue'
import { SUCCESS_RET_CODE } from '@/utils/constant'
import { get } from '@/utils/server'

const svgData = ref('')

onMounted(() => {
  getVerifyCodeData()
})

const getVerifyCodeData = async () => {
  const res = await get(VERIFY_CODE_URL)
  if (res.data.retCode === SUCCESS_RET_CODE) {
    svgData.value = res.data.data
  }
}
</script>

<style lang="less">
.verifyCodeSvg {
}
</style>
