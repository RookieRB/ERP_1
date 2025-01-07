<script setup lang="ts">
import ShowInfoCardWithIcon from '@/components/ShowInfoCardWithIcon/index.vue'
import {
  analysisMockDataArray,
  analysisMockChartDataArray,
  analysisMockTransactionDataArray,
} from '@/Mock/analysisMock'
import Transactions from '@/views/main/dashboard/analysis/c-cpns/Transactions/index.vue'
</script>

<template>
  <div class="analysis">
    <div class="analysis-top">
      <template v-for="item in analysisMockDataArray">
        <div class="analysis-top-item animate__animated animate__backInDown">
          <ShowInfoCardWithIcon :infoCardDataInfo="item"></ShowInfoCardWithIcon>
        </div>
      </template>
    </div>
    <div class="analysis-middle"></div>
    <div class="analysis-bottom animate__animated animate__bounceInLeft">
      <Transactions :transactionDataInfo="analysisMockTransactionDataArray"></Transactions>
    </div>
  </div>
</template>

<style scoped lang="less">
.analysis {
  box-sizing: border-box;
  padding: 20px 30px;
  .analysis-top {
    display: flex;
    justify-content: space-between;
    .analysis-top-item {
      flex: 0 0 22%;
    }
  }

  .analysis-middle {
    margin-top: 40px;
    display: flex;
    gap: 40px;
    .detail {
      width: 40%;
    }
    .total-revenue {
      flex: 1;
    }
  }
  .analysis-bottom {
  }
}
</style>
