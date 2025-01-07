<script setup lang="ts">
import { ref } from 'vue'

// 引用mock数据
import { benchWorkNotificationsDataArray } from '@/Mock/benchWorkMock'
// 用于控制通知切换
const isSwitch = ref(true)
const switchRef = ref()
const changeSwitchClickHandler = () => {
  if (isSwitch.value) {
    switchRef.value.style.transform = 'translateX(105%)'
  } else {
    switchRef.value.style.transform = 'translateX(-5%)'
  }
  isSwitch.value = !isSwitch.value
}

// 用于切换页面
const pageArray = ['Overview', 'Shared', 'Comments']
let currentPage = ref(0)

const changePageClickHandler = (index: number) => {
  currentPage.value = index
}
</script>

<template>
  <div class="notifications">
    <div class="top">
      <div class="title">我发布过的资源记录</div>
      <div class="switch-button" @click="changeSwitchClickHandler">
        <div class="switch" ref="switchRef"></div>
        <div class="item">
          <NotificationNormalIcon
            :bg-color="isSwitch ? '#ebebeb' : '#515151'"
            icon-height="30"
            icon-width="30"
          ></NotificationNormalIcon>
        </div>
        <div class="item">
          <NotificationBannedIcon
            :bg-color="!isSwitch ? '#ebebeb' : '#515151'"
            icon-height="30"
            icon-width="30"
          ></NotificationBannedIcon>
        </div>
      </div>
    </div>
    <div class="page-switch">
      <div
        class="page-name"
        v-for="(item, index) in pageArray"
        @click="changePageClickHandler(index)"
        :style="{
          'border-bottom': index === currentPage ? '4px solid #d4cef0' : '',
          'font-weight': index === currentPage ? 'bold' : '',
        }"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <div class="page-content">
      <template v-for="(item, index) in benchWorkNotificationsDataArray" :key="index">
        <div class="content-item">
          <div class="item-top">
            <div class="item-img">
              <img :src="item.img" alt="" />
            </div>
            <div class="item-desc">
              {{ item.description }}
            </div>
            <div class="item-icon">
              <div class="link">
                <component is="LinkIcon" icon-width="20" icon-height="20"></component>
                <span>Link</span>
              </div>
            </div>
          </div>
          <div class="item-bottom">
            <div class="type">
              {{ item.type }}
            </div>
            <div class="time">
              {{ item.time }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.notifications {
  .card-style();
  background: #f0f0f0;
  .top {
    display: flex;
    align-items: center;

    .title {
      font-size: 22px;
      flex: 1;
    }

    .switch-button {
      display: flex;
      gap: 10px;
      position: relative;
      background: #ffffff;
      border-radius: 25px;
      z-index: 1;
      cursor: pointer;

      .switch {
        position: absolute;
        width: 50%;
        height: 100%;
        background: #000;
        border-radius: 25px;
        transform: translateX(-5%);
        transition: all 0.25s;
      }

      .item {
        z-index: 3;
      }
    }
  }
  .page-switch {
    display: flex;
    gap: 20px;
    margin-top: 10px;

    .page-name {
      font-size: 20px;
      cursor: pointer;
    }
  }
  .page-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    .content-item {
      box-sizing: border-box;
      padding: 10px 19px;
      border-radius: 20px;
      background: #fff;
      .item-top {
        display: flex;
        .item-img {
          width: 50px;
          height: 50px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
        }
        .item-desc {
          flex: 1;
          margin: 0 10px;
          display: -webkit-box; /* 必须结合 -webkit-box 使用 */
          -webkit-box-orient: vertical; /* 设置盒子内的内容垂直排列 */
          -webkit-line-clamp: 3; /* 限制显示的行数 */
          overflow: hidden; /* 隐藏溢出内容 */
          text-overflow: ellipsis; /* 超出部分用省略号显示 */
          font-size: 17px;
        }
        .item-icon {
          .link {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 3px 8px;
            cursor: pointer;
            gap: 5px;
            border-radius: 25px;
            background: #000;
            span {
              color: #efefef;
            }
          }
        }
      }
      .item-bottom {
        display: flex;
        margin-top: 30px;
        color: var(--shallow_gray);
        .type {
          flex: 1;
        }
        .time {
        }
      }
    }
  }
}
</style>
