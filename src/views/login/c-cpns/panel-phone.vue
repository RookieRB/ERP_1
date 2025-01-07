<template>
  <div class="phone">
    <el-form label-width="auto" style="max-width: 600px">
      <el-form-item label="手机号">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="verify-code">
          <el-input />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.phone {
  .verify-code {
    display: flex;

    .get-btn {
      margin-left: 10px;
    }
  }
}
</style>
