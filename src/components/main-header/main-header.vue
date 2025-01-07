<template>
  <div class="main-header">
    <component is="ShanziIcon" class="show" @click="changeExpandClickHandler"> </component>
    <div class="top-content">
      <div class="top-content-top">
        <div class="currentPage-name">
          {{ currentSubmenuPageInfo?.name }}
        </div>
      </div>
      <div class="top-content-bottom">
        <div class="icon">
          <component is="PageContentIcon" icon-width="20" icon-height="20"></component>
          <span>Page</span>
        </div>
        <div class="dot"></div>
        <div class="language">
          <component is="LanguageIcon" icon-width="20" icon-height="20"></component>
          <span> 中文 </span>
        </div>
        <div class="dot"></div>
        <div class="open-time">上次打开时间 : {{ getCurrentTimeFormat(new Date()) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NavBarItem } from '@/views/main/type'
import { getCurrentTimeFormat } from '@/utils/common'
import { localCache } from '@/utils/cache'
import { CURRENT_SUBMENU_PAGE } from '@/constants/index'

const isFold = ref<boolean>(false)
// 发出折叠事件
const emit = defineEmits(['foldChange'])
// 点击折叠按钮处理相关逻辑
const changeExpandClickHandler = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

const currentSubmenuPageInfo = ref<NavBarItem>(localCache.getCache(CURRENT_SUBMENU_PAGE))

const changeHeadrInfoHandler = (subMenuItemInfo: NavBarItem) => {
  currentSubmenuPageInfo.value = subMenuItemInfo
}

defineExpose({
  changeHeadrInfoHandler,
})
</script>

<style lang="less" scoped>
.main-header {
  position: relative;
  .show {
    position: absolute;
    left: -17px;
    top: 25%;
  }

  .top-content {
    padding: 15px 40px;

    .top-content-top {
      margin-bottom: 10px;
      font-size: 18px;
      .currentPage-name {
      }
    }

    .top-content-bottom {
      display: flex;
      align-items: center;
      gap: 10px;

      .icon {
        display: flex;
        gap: 10px;

        span {
          color: var(--shallow_gray);
        }
      }

      .dot {
        width: 3px;
        height: 3px;
        margin: auto 0;
        border-radius: 50%;
        background: var(--shallow_gray);
      }

      .language {
        display: flex;
        gap: 10px;
        color: var(--shallow_gray);
      }

      .open-time {
        color: var(--shallow_gray);
      }
    }
  }
}
</style>
