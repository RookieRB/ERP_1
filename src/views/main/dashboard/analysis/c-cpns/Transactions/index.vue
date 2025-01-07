<script setup lang="ts">
import type { TransactionData } from '../../type'
defineProps({
  transactionDataInfo: {
    type: Array<TransactionData>,
    default: [],
  },
})
</script>

<template>
  <div class="transaction">
    <div class="top">
      <div class="title">Transactions</div>
      <div class="top-right">
        <div class="search">
          <component is="SearchIcon" icon-height="25" icon-width="25" />
        </div>
        <div class="button">
          <div class="name">View All</div>
          <div class="icon">
            <component is="DownArrowIcon" icon-width="20" icon-height="20"></component>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list-title">
        <div class="receiver width_230">Receiver</div>
        <div class="date width_230">Date</div>
        <div class="status width_230">Status</div>
        <div class="type width_230">Type</div>
        <div class="amount width_230">Amount</div>
      </div>
      <div class="list-item" v-for="(item, index) in transactionDataInfo" :key="index">
        <div class="item-receiver width_230">
          <div class="item-img">
            <img :src="item.img" alt="" />
          </div>
          <div class="item-name">
            {{ item.name }}
          </div>
        </div>
        <div class="item-date width_230">
          {{ item.date }}
        </div>

        <div class="item-status width_230">
          <template v-if="item.status === 1">
            <div class="status-body success-body">
              <div class="status-light success-light"></div>
              <div class="status-title">Completed</div>
            </div>
          </template>
          <template v-else-if="item.status === 0">
            <div class="status-body error-body">
              <div class="status-light error-light"></div>
              <div class="status-title">Completed</div>
            </div>
          </template>
          <template v-else>
            <div class="status-body warming-body">
              <div class="status-light warming-light"></div>
              <div class="status-title">Completed</div>
            </div>
          </template>
        </div>
        <div class="item-type width_230">
          {{ item.type }}
        </div>
        <div class="item-account width_230">- ${{ item.amount.toFixed(2) }}</div>
        <div class="item-more">
          <component is="MoreIcon" icon-height="25" icon-width="25"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.transaction {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 19px 2px rgba(0, 0, 0, 0.05);
  margin-top: 30px;
  .top {
    display: flex;
    align-items: center;
    .title {
      font-size: 30px;
    }
    .top-right {
      flex: 1;
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 20px;
      .search {
        box-sizing: border-box;
        padding: 3px;
        border-radius: 10px;
        background-color: #ebebeb;
      }
      .button {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 10px;
        background-color: #ebebeb;
        cursor: pointer;
      }
    }
  }
  .list {
    .list-title {
      display: flex;
      margin-top: 25px;
      font-size: 14px;
    }
    .width_230 {
      width: 13vw;
    }
    .list-item {
      display: flex;
      align-items: center;
      margin-top: 10px;
      font-size: 16px;
      .item-receiver {
        display: flex;
        align-items: center;
        gap: 10px;
        .item-img {
          height: 33px;
          width: 33px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }
        }
        .item-name {
          flex: 1;
        }
      }
      .item-status {
        .success-body {
          background: var(--shallow_gray_1);
        }
        .error-body {
          background: var(--shallow_red);
        }
        .warming-body {
          background: var(--shallow_yellow);
        }
        .status-body {
          width: 60%;
          display: flex;
          border-radius: 25px;
          align-items: center;
          gap: 8px;
          box-sizing: border-box;
          padding: 5px;
          .status-light {
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
          .error-light {
            background: var(--light_red);
          }
          .success-light {
            background: var(--light_green);
          }
          .warming-light {
            background: var(--light_yellow);
          }
        }
      }
    }
  }
}
</style>
