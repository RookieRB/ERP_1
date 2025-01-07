<template>
  <div class="history-record">
    <svg
      t="1732881317593"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="27053"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M512 959.7C265.2 959.7 64.3 758.9 64.3 512S265.2 64.3 512 64.3 959.7 265.1 959.7 512 758.8 959.7 512 959.7z m0-833.6c-212.8 0-385.9 173.1-385.9 385.9S299.2 897.9 512 897.9 897.9 724.8 897.9 512 724.8 126.1 512 126.1z"
        p-id="27054"
        fill="#222"
      ></path>
      <path d="M774.4 589.2H434.8V265h61.8v262.4h277.8z" p-id="27055" fill="#222"></path>
    </svg>
    <div class="text">历史</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iconWidth: {
    type: String,
    default: '25',
  },
  iconHeight: {
    type: String,
    default: '25',
  },
})
</script>

<style lang="less" scoped>
.history-record {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    svg {
      animation: jumpback 0.5s ease;
    }
  }
  .text {
    margin-top: 3px;
    font-size: 13px;
    color: #222;
  }
}
</style>
