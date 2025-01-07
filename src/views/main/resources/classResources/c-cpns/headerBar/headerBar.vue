<template>
  <div class="headr-bar">
    <div class="header-bar-left">
      <div class="switch-item">视频</div>
      <div class="switch-item">文章</div>
    </div>
    <div class="header-bar-middle">
      <searchBar></searchBar>
    </div>
    <div class="header-bar-right">
      <div>
        <el-avatar :size="40" src="src/assets/img/avatar.jpg"> </el-avatar>
      </div>
      <div class="history-record">
        <component is="HistoryRecordIcon"></component>
      </div>
      <div class="collection">
        <component is="CollectionIcon"></component>
      </div>
      <div class="notification">
        <component is="MessagePopIcon" iconHeight="25" iconWidth="25">通知</component>
      </div>
      <el-button type="primary" size="large" :icon="Edit" round>上传</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
import searchBar from './searchBar.vue'
</script>

<style lang="less" scoped>
.headr-bar {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  border-bottom: 1px solid #ededed;
  // background: #f1f5f9;
  .header-bar-left {
    display: flex;
    align-items: center;
    gap: 1vw;
    color: #222;
    margin-left: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  .header-bar-right {
    box-sizing: border-box;
    display: flex;
    gap: 20px;
    padding-right: 20px;
  }
}
</style>
