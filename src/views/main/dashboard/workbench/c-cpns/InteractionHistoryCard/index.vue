<script setup lang="ts">
import type { InteractionHistoryData } from '@/views/main/dashboard/workbench/type'
import { numberToString } from '@/utils/common'
const props = defineProps({
  interactionDataInfo: {
    type: Object as () => InteractionHistoryData,
    default: {
      date: 'Sept 15',
      groupName: 'shuadan xiaozu',
      description: 'shaudan',
      money: 11250,
      groupMember: ['src/assets/avatar.jpg', 'src/assets/avatar02.jpg', 'src/assets/avatar04.jpg'],
    },
  },
  bgColor: {
    type: String,
    default: '#fff',
  },
  fontColor: {
    type: String,
    default: '#fff',
  },
  isChangeIcon: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="history-card" :style="{ background: bgColor, color: fontColor }">
    <div class="card-top">
      <div class="card-top-left">
        <div class="date">
          {{ interactionDataInfo.date }}
        </div>
        <div class="groupName">
          {{ interactionDataInfo.groupName }}
        </div>
        <div class="description">
          {{ interactionDataInfo.description }}
        </div>
      </div>
      <div class="card-top-right">
        <template v-if="!isChangeIcon">
          <div class="more circle">
            <component
              is="MoreIcon"
              icon-height="16"
              icon-width="16"
              :button-color="fontColor"
            ></component>
          </div>
        </template>
        <template v-else>
          <div class="more circle whiteBG">
            <component is="YouShangArrowIcon" icon-height="16" icon-width="16"></component>
          </div>
        </template>
      </div>
    </div>
    <div class="card-bottom">
      <div class="money">{{ numberToString(interactionDataInfo.money) }}$</div>
      <div class="group">
        <img src="@/assets/img/avatar01.jpg" alt="" />
        <img src="@/assets/img/avatar02.jpg" alt="" />
        <img src="@/assets/img/avatar03.jpg" alt="" />
        <img src="@/assets/img/avatar04.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.history-card {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 20px;
  color: #b8cbee;
  .card-style();

  .card-top {
    display: flex;
    .card-top-left {
      flex: 1;
      .date {
        font-size: 12px;
      }
      .groupName {
        font-size: 14px;
        white-space: nowrap;
      }
      .description {
        font-size: 14px;
        white-space: nowrap;
      }
    }
    .card-top-right {
      .circle {
        padding: 10px 12px;
        border-radius: 40px;
        box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
      }
      .whiteBG {
        background: #fff;
      }
      .more {
      }
    }
  }
  .card-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .money {
      font-weight: bold;
    }
    .group {
      display: flex;
      flex-wrap: nowrap;
      img {
        height: 28px;
        width: 28px;
        object-fit: contain;
        border-radius: 50%;
        &:nth-child(1) {
          transform: translateX(40%);
        }
        &:nth-child(2) {
          transform: translateX(20%) translateZ(10px);
        }
        &:nth-child(3) {
          transform: translateX(0) translateZ(20px);
        }
        &:nth-child(4) {
          transform: translateX(-20%) translateZ(30px);
        }
      }
    }
  }
}
</style>
