<script setup lang="ts">
defineProps({
  iconWidth: {
    type: String,
    default: '35',
  },
  iconHeight: {
    type: String,
    default: '35',
  },
  bgColor: {
    type: String,
    default: '#515151',
  },
})
</script>

<template>
  <div class="notification-normal">
    <svg
      t="1726467419021"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2579"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M512 938.666667c46.933333 0 85.333333-38.4 85.333333-85.333334h-170.666666c0 46.933333 38.4 85.333333 85.333333 85.333334z m256-256v-213.333334c0-130.986667-69.546667-240.64-192-269.653333V170.666667c0-35.413333-28.586667-64-64-64s-64 28.586667-64 64v29.013333C325.973333 228.693333 256 337.92 256 469.333333v213.333334l-85.333333 85.333333v42.666667h682.666666v-42.666667l-85.333333-85.333333z m-85.333333 42.666666H341.333333v-256c0-105.813333 64.426667-192 170.666667-192s170.666667 86.186667 170.666667 192v256z"
        p-id="2580"
        :fill="bgColor"
      ></path>
    </svg>
    <div class="text">
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.notification-normal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .text {
    margin-top: 3px;
    font-size: 13px;
    color: #fff;
  }
}
</style>
