<script setup lang="ts">
import InteractionHistoryCard from '@/views/main/dashboard/workbench/c-cpns/InteractionHistoryCard/index.vue'
import { benchWorkInteractionDataArray } from '@/Mock/benchWorkMock'
const colorArray = [
  {
    bgColor: '#5a4bea',
    fontColor: '#F5F5F5',
  },
  {
    bgColor: '#2db194',
    fontColor: '#F5F5F5',
  },
  {
    bgColor: '#ffaf00',
    fontColor: '#fff',
  },
  {
    bgColor: '#efe347',
    fontColor: '#000',
  },
  {
    bgColor: '#ebf0f2',
    fontColor: '#000',
  },
  {
    bgColor: '#eff3ef',
    fontColor: '#000',
  },
]
</script>

<template>
  <div class="interaction">
    <div class="interaction-top">
      <div class="title">Interaction History</div>
      <div class="more circle">
        <component is="MoreIcon" icon-width="16" icon-height="16"></component>
      </div>
      <div class="expend circle">
        <component is="YouShangArrowIcon" icon-width="16" icon-height="16"></component>
      </div>
    </div>
    <div class="interaction-content">
      <div class="content-item" v-for="(item, index) in benchWorkInteractionDataArray">
        <InteractionHistoryCard
          :interactionDataInfo="item"
          :isChangeIcon="index === 2"
          :bgColor="colorArray[index].bgColor"
          :font-color="colorArray[index].fontColor"
        ></InteractionHistoryCard>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.interaction {
  .card-style();
  .interaction-top {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    .title {
      font-size: 22px;
      flex: 1;
    }
    .circle {
      padding: 10px 12px;
      border-radius: 40px;
      box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
    }
    .more {
    }
    .expend {
    }
  }
  .interaction-content {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
    .content-item {
      flex: 0 0 30%;
    }
  }
}
</style>
