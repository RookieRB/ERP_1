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
  <div class="message">
    <svg
      t="1726453899588"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6481"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M106.666667 303.658667V789.333333h810.666666V303.658667L512 653.717333 106.666667 303.637333zM157.354667 234.666667L512 540.949333 866.645333 234.666667H157.354667zM1002.666667 149.333333v725.333334H21.333333V149.333333h981.333334z"
        fill="#8a8a8a"
        p-id="6482"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less"></style>
