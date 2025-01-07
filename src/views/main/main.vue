<template>
  <div class="main">
    <div class="main-left">
      <nav-menu
        :navBarArray="navMenusMockData"
        :isFold="isFold"
        @sendCurrentMenuPageInfo="subMenuPageChangeHandler"
      ></nav-menu>
    </div>
    <div class="main-right">
      <div class="main-header">
        <main-header @foldChange="foldChangeHandler" ref="mainHeaderRef"></main-header>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import navMenu from '@/components/nav-menu/nav-menu.vue'
import mainHeader from '@/components/main-header/main-header.vue'
import type { NavBarItem } from '@/views/main/type'
import navMenusMockData from '@/Mock/nav-menuMock'

const isFold = ref<boolean>(false)

const foldChangeHandler = (value: boolean) => {
  isFold.value = value
}

// 获取headr组件
const mainHeaderRef = ref<InstanceType<typeof mainHeader>>()
// 副菜单改变逻辑
const subMenuPageChangeHandler = (item: NavBarItem) => {
  mainHeaderRef.value?.changeHeadrInfoHandler(item)
}
</script>

<style lang="less" scoped>
.main {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  .main-left {
  }
  .main-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .main-header {
      height: 70px;
      box-shadow: 0 2px 18px 9px #ebebeb;
    }
    .main-content {
      flex: 1;
      overflow: auto;
    }
  }
}
</style>
