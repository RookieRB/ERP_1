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
  <div class="user">
    <svg
      t="1726454576399"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="13171"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M499.2 524.8c171.52 0 311.168 135.68 316.16 304.96l0.192 9.408v38.528H768v-38.528c0-147.328-120.32-266.88-268.8-266.88-145.536 0-264 114.816-268.672 258.112l-0.128 8.768v38.4h-47.552v-38.4C182.848 665.6 324.48 524.8 499.2 524.8z m0-378.496a164.544 164.544 0 1 1 0 329.088 164.544 164.544 0 0 1 0-329.088z m0 47.552a117.056 117.056 0 1 0 0 234.048 117.056 117.056 0 0 0 0-234.048z"
        fill="#8a8a8a"
        p-id="13172"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less"></style>
