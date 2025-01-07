<template>
  <div class="shu-more">
    <svg :width="iconWidth" :height="iconHeight">
      <path
        d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
      ></path>
    </svg>
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
.shu-more {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 25px;
  transition: background 0.25s ease;
  &:active {
    border: 1px solid #bbbaba;
    background: #bbbaba;
  }
}
</style>
