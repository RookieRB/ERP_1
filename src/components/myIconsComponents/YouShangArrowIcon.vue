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
})
</script>

<template>
  <div class="arrow">
    <svg
      t="1726394786646"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8416"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M661.696 320h-242.752a32 32 0 0 1 0-64h320a31.904 31.904 0 0 1 32 32v320a32 32 0 0 1-64 0v-242.752l-383.04 383.04a32 32 0 0 1-45.28-45.216L661.664 320z"
        fill="#000"
        p-id="8417"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less">
.arrow {
  cursor: pointer;
}
</style>
