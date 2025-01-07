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
  <div class="down-arrow">
    <svg
      t="1724582432652"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1941"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M268.501333 396.501333a42.666667 42.666667 0 0 0-3.541333 56.32l3.541333 4.010667 213.333334 213.333333a42.666667 42.666667 0 0 0 56.32 3.541334l4.010666-3.541334 213.333334-213.333333a42.666667 42.666667 0 0 0-56.32-63.872l-4.010667 3.541333L512 579.626667 328.832 396.501333a42.666667 42.666667 0 0 0-56.32-3.541333l-4.010667 3.541333z"
        :fill="color"
        p-id="1942"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less"></style>
