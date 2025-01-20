<template>
  <div class="nav-menu">
    <div class="nav-menu-left">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="" />
      </div>
      <div class="nav-menu-list">
        <template v-for="(item, index) in navBarArray" :key="item.id">
          <div
            class="nav-menu-list-item"
            @click="changePageClickHandler(index)"
            :class="{ 'nav-menu-list-item-choose': currentPage === index }"
          >
            <component :is="item.icon" icon-height="25" icon-width="25"></component>
          </div>
        </template>
      </div>
      <div class="add-button">
        <component is="AddIcon" icon-height="40" icon-width="40"></component>
      </div>
      <div class="nav-menu-bottomList">
        <template v-for="item in commonComponentsArray">
          <div class="nav-menu-bottomList-item">
            <component
              :is="item.path"
              :icon-height="item.iconHeight"
              :icon-width="item.iconWidth"
            ></component>
          </div>
        </template>
      </div>
      <div class="user-info">
        <img src="@/assets/img/avatar01.jpg" alt="" />
      </div>
    </div>
    <div class="nav-menu-submenu" :class="{ 'nav-menu-submenu-close': isFold }">
      <div class="stretch-navBar-content">
        <div class="content-top">
          {{ navBarArray[currentPage].name }}
        </div>
        <div class="content-top-list">
          <template v-for="(item, index) in navBarArray[currentPage].children" :key="item.id">
            <div
              class="content-list-item"
              @click="changeSubMenuPageClickHandler(index)"
              :class="{ 'content-list-item-choose': currentSubmenuPage === index }"
            >
              <div class="item-icon">
                <component :is="item.icon" icon-height="20" icon-width="20"></component>
              </div>
              <div class="item-name">
                {{ item.name }}
              </div>
            </div>
          </template>
        </div>
        <div class="br"></div>
        <div class="content-middle-list"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { NavBarItem } from '@/views/main/type'
import { useRouter } from 'vue-router'
import { localCache } from '@/utils/cache'
import {
  CURRENT_MENU_PAGE_ID,
  CURRENT_SUBMENU_PAGE_ID,
  CURRENT_SUBMENU_PAGE,
} from '@/constants/index'

// 路由对象
const router = useRouter()

// 定义一个用组件的数组
const commonComponentsArray = [
  {
    path: 'ThemeChangerIcon',
    iconHeight: '25',
    iconWidth: '25',
  },
  {
    path: 'ThunderIcon',
    iconHeight: '25',
    iconWidth: '25',
  },
  {
    path: 'SettingIcon',
    iconHeight: '25',
    iconWidth: '25',
  },
]

const props = defineProps({
  navBarArray: {
    type: Array<NavBarItem>,
    default: () => ({}),
  },
  isFold: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['sendCurrentMenuPageInfo'])
// 定义一个指针用于指向当前最外面展示的页面数据
const currentPage = ref<number>(localCache.getCache(CURRENT_MENU_PAGE_ID) || 0)
// 切换最外面页面处理相关逻辑
const changePageClickHandler = (page: number) => {
  if (currentPage.value != page) {
    // 将当前页面切换
    currentPage.value = page
  }
}

// 最里面submenu页面所指的指针
const currentSubmenuPage = ref<number>(localCache.getCache(CURRENT_SUBMENU_PAGE_ID) || 0)

// 切换最里面页面处理相关逻辑
const changeSubMenuPageClickHandler = (page: number) => {
  // 将当前页面切换
  currentSubmenuPage.value = page

  // 缓存点击操作，用于刷新后加载页面
  localCache.setCache(CURRENT_MENU_PAGE_ID, currentPage.value)
  localCache.setCache(CURRENT_SUBMENU_PAGE_ID, page)
  localCache.setCache(
    CURRENT_SUBMENU_PAGE,
    props.navBarArray[currentPage.value].children?.[currentSubmenuPage.value],
  )

  // 切换里面页面的同时需要将当前页面的信息发给我们的header首页，让其显示出来
  const path = props.navBarArray[currentPage.value].children?.[currentSubmenuPage.value]?.path
  router.push(path as string)
  emit(
    'sendCurrentMenuPageInfo',
    props.navBarArray[currentPage.value].children?.[currentSubmenuPage.value],
  )
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: var(--light_gray);
  .nav-menu-left {
    display: flex;
    width: 70px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #ddd;
    .logo {
      height: 40px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .nav-menu-list {
      flex: 1;
      margin-top: 10px;

      .nav-menu-list-item {
        margin-top: 5px;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 7px;
        cursor: pointer;

        &:hover {
          background: #ebebeb;
        }
      }

      .nav-menu-list-item-choose {
        background: #ebebeb;
      }

      .br {
        border: 1px solid #ebebeb;
        margin-top: 5px;
      }
    }
    .add-button {
    }

    .nav-menu-bottomList {
      display: flex;
      flex-direction: column;
      justify-content: end;

      .nav-menu-bottomList-item {
        margin-top: 15px;
      }
    }
    .user-info {
      margin-top: 15px;
      margin-bottom: 20px;
      width: 35px;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .nav-menu-submenu {
    width: 250px;
    transition: width 0.75s ease;
    overflow: hidden;
    .stretch-navBar-content {
      height: 100%;
      box-sizing: border-box;
      padding: 30px 20px 0 20px;
      .content-top {
        font-size: 25px;
        font-weight: bold;
        white-space: nowrap;
      }
      .content-list-item-choose {
        background: #ebebeb;
      }
      .content-list-item {
        display: flex;
        white-space: nowrap;
        margin-top: 10px;
        width: 100%;
        box-sizing: border-box;
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
        gap: 20px;
        color: #515151;
        &:hover {
          background: #ebebeb;
        }
        .item-icon {
          line-height: 15px;
        }
        .item-name {
          margin: auto 0;
          font-size: 16px;
        }
      }
      .content-top-list {
        margin: 20px 0;
      }
      .br {
        border: 1px solid #ebebeb;
      }
      .content-middle-list {
      }
    }
  }
  .nav-menu-submenu-close {
    width: 0px;
  }
}
</style>
