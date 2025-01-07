<script setup lang="ts">
import Interaction from '@/views/main/dashboard/workbench/c-cpns/Interaction/index.vue'
import UserInfo from '@/views/main/dashboard/workbench/c-cpns/UserInfo/index.vue'
import DetailInfo from '@/views/main/dashboard/workbench/c-cpns/DetailInfo/index.vue'
import Statistics from '@/views/main/dashboard/workbench/c-cpns/Statistics/index.vue'
import Notifications from '@/views/main/dashboard/workbench/c-cpns/Notifications/index.vue'
</script>

<template>
  <div class="content">
    <div class="content-left">
      <div class="content-interaction animate__animated animate__fadeInLeft">
        <Interaction></Interaction>
      </div>
      <div class="content-bottom">
        <div class="content-statistics animate__animated animate__fadeInLeft">
          <Statistics></Statistics>
        </div>
        <div class="content-notifications animate__animated animate__fadeInLeft">
          <Notifications></Notifications>
        </div>
      </div>
    </div>
    <div class="content-right">
      <div class="content-userInfo animate__animated animate__fadeInLeft">
        <UserInfo></UserInfo>
      </div>
      <div class="content-detailInfo animate__animated animate__fadeInLeft">
        <DetailInfo></DetailInfo>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  height: 100%;
  width: 100%;
  .content-left {
    flex: 1;
    .content-interaction {
    }
    .content-bottom {
      margin-top: 30px;
      display: flex;
      gap: 20px;
      .content-statistics {
        width: 20vw;
      }
      .content-notifications {
        flex: 1;
      }
    }
  }
  .content-right {
    margin-left: 20px;
    width: 30%;
    .content-userInfo {
    }
    .content-detailInfo {
      margin-top: 20px;
    }
  }
}
</style>
