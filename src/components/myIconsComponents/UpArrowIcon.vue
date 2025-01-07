<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: '#858EBD',
  },
  iconWidth: {
    type: String,
    default: '20px',
  },
  iconHeight: {
    type: String,
    default: '20px',
  },
})
</script>

<template>
  <div class="up-arrow">
    <svg
      t="1724582196183"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1777"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M755.498667 627.498667a42.666667 42.666667 0 0 0 3.541333-56.32l-3.541333-4.010667-213.333334-213.333333a42.666667 42.666667 0 0 0-56.32-3.541334l-4.010666 3.541334-213.333334 213.333333a42.666667 42.666667 0 0 0 56.32 63.872l4.010667-3.541333L512 444.373333l183.168 183.125334a42.666667 42.666667 0 0 0 56.32 3.541333l4.010667-3.541333z"
        :fill="color"
        p-id="1778"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less">
.up-arrow {
}
</style>
