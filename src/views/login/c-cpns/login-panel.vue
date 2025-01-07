<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="icon">
            <el-icon><UserFilled /></el-icon>
            <span class="text">账号登录</span>
          </span>
        </template>
        <panel-account ref="accountRef"></panel-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="icon">
            <el-icon><Iphone /></el-icon>
            <span class="text">手机登录</span>
          </span>
        </template>
        <panel-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="control-account">
      <el-checkbox label="记住密码" v-model="isKeep" />
      <el-link type="primary">记住密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="loginBtnClickHandler">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { localCache } from '@/utils/cache'
import PanelAccount from './panel-account.vue'
import PanelPhone from './panel-phone.vue'

const REM_PWD = 'rem_pwd'

const isKeep = ref<boolean>(localCache.getCache(REM_PWD))
watch(isKeep, (newValue) => {
  localCache.setCache(REM_PWD, newValue)
})

const accountRef = ref<InstanceType<typeof PanelAccount>>()

const loginBtnClickHandler = () => {
  accountRef.value?.loginAction(isKeep.value)
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .control-account {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
