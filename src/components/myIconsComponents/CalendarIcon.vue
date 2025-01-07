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
  <div class="calendar">
    <svg
      t="1724824329434"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5980"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M731.3 146.4V107h-78.8l-41.4 24.3 41.4 15.1H416.1V107h-78.8l-41.4 24.3 41.4 15.1h-197l-41.4 24.3 41.4 724.4L887 919.4l41.4-24.3V146.4H731.3zM594.2 820.2l-125.3 5.1-6.5-247.4-54.2 6.4V461.7h195l-9 358.5zM219 343.4V225.2h118.2v39.4l37.4 24.3 41.4-24.3v-39.4h236.4v39.4l37.4 24.3 41.4-24.3v-39.4h118.2v118.2H219z m0 0"
        fill="#1296db"
        p-id="5981"
      ></path>
      <path
        d="M689.9 170.7v-39.4h-78.8v39.4H374.7v-39.4h-78.8v39.4h-197v748.7H887V170.7H689.9zM561.8 801.2H483V564.8h-59.1V486h137.9v315.2zM177.6 367.7V249.5h118.2v39.4h78.8v-39.4H611v39.4h78.8v-39.4H808v118.2H177.6z m0 0"
        fill="#1296db"
        p-id="5982"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less">
.calendar {
  width: 100%;
  height: 100%;
}
</style>
