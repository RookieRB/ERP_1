<script setup lang="ts">
import { ref } from 'vue'
// 实现按钮切换
const isWeek = ref(true)
const switchRef = ref()
const weekRef = ref()
const monthRef = ref()
const changeSwitchButtonClickHandler = () => {
  if (isWeek.value) {
    switchRef.value.style.width = '60%'
    switchRef.value.style.transform = 'translateX(75%)'
    weekRef.value.style.color = '#000'
    monthRef.value.style.color = '#fff'
  } else {
    switchRef.value.style.width = '46%'
    switchRef.value.style.transform = 'translateX(-5%)'
    weekRef.value.style.color = '#fff'
    monthRef.value.style.color = '#000'
  }
  isWeek.value = !isWeek.value
}
</script>

<template>
  <div class="statistics">
    <div class="top">
      <div class="title">Statistics</div>
      <div class="switch-button" @click="changeSwitchButtonClickHandler">
        <div class="switch" ref="switchRef"></div>
        <div class="week button" ref="weekRef">weekly</div>
        <div class="month button" ref="monthRef">monthly</div>
      </div>
    </div>
    <div class="content">
      <div class="content-top">
        <div class="complete-task fs30">49</div>
        <div class="br"></div>
        <div class="total-task fs30">83</div>
        <div class="des">tasks complete</div>
      </div>
      <div class="content-bottom">
        <div class="content-complete bottom-item">
          <div class="icon">
            <component is="VideoIcon" icon-width="70" icon-height="70"></component>
          </div>
          <div class="number">23</div>
          <div class="desc">Project complete</div>
        </div>
        <div class="content-progress bottom-item">
          <div class="icon">
            <component is="RecordIcon" icon-width="70" icon-height="70"></component>
          </div>
          <div class="number">16</div>
          <div class="desc">Project in progress</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.statistics {
  height: 100%;
  .card-style();
  .top {
    display: flex;
    .title {
      flex: 1;
      font-size: 1.5vw;
      font-weight: 600;
    }
    .switch-button {
      display: flex;
      align-items: center;
      position: relative;
      gap: 10px;
      background: #f7f7f7;
      border-radius: 25px;
      z-index: 1;
      cursor: pointer;
      .switch {
        position: absolute;
        width: 46%;
        transform: translateX(-5%);
        height: 100%;
        border-radius: 25px;
        background: #000;
        transition: all 0.25s;
      }
      .button {
        width: 50%;
      }
      .month {
        z-index: 2;
      }
      .week {
        z-index: 2;
        color: #fff;
      }
    }
  }
  .content {
    .content-top {
      display: flex;
      margin-top: 40px;
      .complete-task {
      }
      .total-task {
      }
      .br {
        border-right: 2px solid #ebebeb;
        margin: 0 10px;
      }
      .fs30 {
        font-size: 3rem;
        font-weight: 600;
      }
      .des {
        display: grid;
        align-items: end;
        color: var(--shallow_gray);
        white-space: nowrap;
      }
    }
    .content-bottom {
      display: flex;
      gap: 1vw;
      margin-top: 20px;
      .bottom-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 15px;
        background: #f7f7f7;
        white-space: nowrap;
        .icon {
          padding: 20px 0;
        }
        .number {
          margin-top: 10px;
          font-size: 2vw;
          font-weight: bold;
        }
        .desc {
          margin-top: 10px;
          white-space: nowrap;
          font-size: 0.75vw;
        }
      }

      .content-complete {
      }
      .content-progress {
      }
    }
  }
}
</style>
