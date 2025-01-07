<template>
  <div class="seasrch-bar" @click="searchBarClickHandler" ref="searchBarRef">
    <div class="search-content">
      <input type="text" placeholder="请输入查询的物品" v-model="inputData" ref="inputRef" />
      <div class="input-clean" ref="inputCleanRef" @click="inputCleanButtonClickHandler">
        <component is="CloseIcon" icon-width="14" icon-height="14"></component>
      </div>
    </div>

    <div class="search-button">
      <component is="SearchIcon" icon-height="20px" icon-width="20px"></component>
    </div>
    <div class="search-panel" v-show="isFocus">
      <div class="history">
        <div class="title">搜索历史</div>
        <div class="clear">清理</div>
      </div>
      <div class="history-wrapper">
        <template v-for="item in 10">
          <div class="history-wrapper-item">
            <div class="history-wrapper-item-text">埃文凯尔 中国行是疗愈之旅</div>
            <div class="close" ref="closeRef">
              <component is="CloseIcon" icon-width="13" icon-height="13"></component>
            </div>
          </div>
        </template>
      </div>
      <div class="more">
        <div class="more-text">展示更多</div>
        <div class="down-arrow">
          <component is="DownArrowIcon" icon-width="13" icon-height="13"></component>
        </div>
      </div>
      <div class="hot-search">
        <div class="title">热搜</div>
        <div class="hot-search-list">
          <div class="hot-search-list-cols">
            <template v-for="(item, index) in hotSearchDataArray">
              <div class="hot-search-list-item" v-if="index % 2 === 0">
                <div class="item-index" :class="{ isTop3: index < 3 }">
                  {{ index + 1 }}
                </div>
                <div class="item-text">
                  {{ item.text }}
                </div>
                <div class="item-icon" v-if="item.icon !== 'none'">
                  <component :is="item.icon" iconWidth="18" iconHeight="18"></component>
                </div>
              </div>
            </template>
          </div>
          <div class="hot-search-list-cols">
            <template v-for="(item, index) in hotSearchDataArray">
              <div class="hot-search-list-item" v-if="index % 2 === 1">
                <div class="item-index" :class="{ isTop3: index < 3 }">
                  {{ index + 1 }}
                </div>
                <div class="item-text">
                  {{ item.text }}
                </div>
                <div class="item-icon" v-if="item.icon !== 'none'">
                  <component :is="item.icon" iconWidth="18" iconHeight="18"></component>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

import { hotSearchDataArray } from '@/Mock/classResource'

const isFocus = ref<boolean>(false)

// searchBar的ref
const searchBarRef = ref()
// close的ref
const closeRef = ref()

// 输入框清楚的ref
const inputCleanRef = ref()
// 输入框的ref
const inputRef = ref()

// 输入框同步数据
const inputData = ref<String>()

// 历史记录鼠标移入逻辑
// const showCloseBtnHandler = () => {
//   if (closeRef.value) {
//     // 展示关闭按钮
//     closeRef.value.style.display = 'block'
//   }
// }
// inputcleanBtn点击处理逻辑
const inputCleanButtonClickHandler = () => {
  if (inputData.value) {
    // 清空输入
    inputData.value = ''
    if (inputRef.value) {
      // 输入框聚焦
      inputRef.value.focus()
    }
  }
}

// 历史记录鼠标移出逻辑
// const unShowCloseBtnHandler = () => {
//   if (closeRef.value) {
//     // 不展示关闭按钮
//     closeRef.value.style.display = 'none'
//   }
// }

// 搜索框点击处理逻辑
const searchBarClickHandler = () => {
  isFocus.value = true
  if (searchBarRef.value) {
    searchBarRef.value.classList.add('is-focus')
    // searchBarRef.value.style.border = '1px solid #e3e5e7'
    // searchBarRef.value.style.borderBottom = 'none'
  }
}

// 添加全局点击处理函数
const GlobalClickHandler = (event: MouseEvent) => {
  if (!searchBarRef.value?.contains(event.target as Node)) {
    // 如果不在searchbar区域内点击，那么我们就关闭searchBar
    isFocus.value = false
    searchBarRef.value?.classList.remove('is-focus')
  }
}

// 监听input输入相关逻辑
watch(inputData, (newVlaue) => {
  if (inputData.value?.length !== 0) {
    if (inputCleanRef.value.style.display !== 'block') {
      inputCleanRef.value.style.display = 'block'
    }
  } else {
    inputCleanRef.value.style.display = 'none'
  }
})

onMounted(() => {
  // 组件挂载时我们去监听他
  document.addEventListener('click', GlobalClickHandler)
})

onBeforeUnmount(() => {
  // 组件卸载时移除监听
  document.removeEventListener('click', GlobalClickHandler)
})
</script>

<style lang="less" scoped>
.seasrch-bar {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ededed;
  background: #fff;
  .search-content {
    display: flex;
    align-items: center;
    width: 400px;
    box-sizing: border-box;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    input {
      width: 100%;
      border: none;
      background-color: rgba(0, 0, 0, 0);
      outline: none;
      font-size: 13px;
    }
    .input-clean {
      cursor: pointer;
      display: none;
    }
  }

  .search-button {
    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;
    margin-right: 5px;
    transition: background-color 0.5s;
    &:hover {
      background-color: #e3e5e7;
    }
  }
  .search-panel {
    position: absolute;

    top: 40px;
    left: 0;
    right: 0;
    background: #fff;
    box-sizing: border-box;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid #e3e5e7;
    border-top: none;
    .title {
      font-size: 14px;
      padding: 0 15px;
    }
    .history {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 15px;
      .clear {
        font-size: 12px;
        color: #9499a0;
        &:hover {
          color: var(--light_blue1);
          cursor: pointer;
        }
      }
    }
    .history-wrapper {
      margin-top: 10px;
      padding: 0 15px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      .history-wrapper-item {
        position: relative;
        box-sizing: border-box;
        padding: 7px;
        font-size: 12px;
        border-radius: 5px;
        background-color: #f6f7f8;
        max-width: 110px;
        &:hover {
          color: var(--light_blue1);
          cursor: pointer;
          .close {
            display: block;
          }
        }
        .history-wrapper-item-text {
          white-space: nowrap; /* 禁止换行 */
          overflow: hidden; /* 隐藏溢出内容 */
          text-overflow: ellipsis; /* 显示省略号 */
        }
        .close {
          position: absolute;
          top: -5px;
          right: -5px;
          display: none;
        }
      }
    }
    .more {
      display: flex;
      justify-content: center;
      align-items: center;
      .more-text {
        font-size: 10px;
      }
      .down-arrow {
        margin-left: 3px;
      }
    }
    .hot-search {
      .hot-search-list {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin: 10px 0;
        .hot-search-list-cols {
          flex: 1;
          display: flex;
          flex-direction: column;
          .hot-search-list-item {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 5px 15px;
            height: 30px;
            width: 210px;
            &:hover {
              background: #ededed;
              cursor: pointer;
            }
            .isTop3 {
              color: #18191c !important;
            }
            .item-icon {
              margin-left: 5px;
            }
            .item-index {
              font-size: 14px;
              color: #9499a0;
            }
            .item-text {
              margin-left: 10px;
              font-size: 14px;
              white-space: nowrap; /* 禁止换行 */
              overflow: hidden; /* 隐藏溢出内容 */
              text-overflow: ellipsis; /* 显示省略号 */
            }
          }
        }
      }
    }
  }
}
.is-focus {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  .search-content {
    background-color: #e3e5e7;
  }
}
</style>
