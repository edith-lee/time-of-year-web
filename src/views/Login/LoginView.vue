<!--
 * @Author: edith Edith_luckend@163.com
 * @Date: 2022-12-08 23:28:07
 * @LastEditors: edith Edith_luckend@163.com
 * @LastEditTime: 2022-12-10 16:44:59
 * @FilePath: \time-of-year-web\src\views\loginView.vue
 * @Description: login page
 * Copyright (c) 2022 by edith Edith_luckend@163.com, All Rights Reserved
-->
<template>
  <div class="login-wrap">
    <el-form label-width="80px" ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon inline>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入手机号或邮箱" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <el-input v-model="ruleForm.verifyCode" />
      </el-form-item>
      <VerifyCodeView></VerifyCodeView>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import VerifyCodeView from '@/components/VerifyCode.vue'

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  username: '',
  password: '',
  verifyCode: ''
})

const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入手机号或邮箱', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 10, message: '密码应为6-10位', trigger: 'blur' }
  ],
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { len: 4, message: '验证码应为4位', trigger: 'blur' }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="less">
.login-wrap {
  width: 1rem;
  background-color: #ffffff;
  padding: 40px;
}
</style>
