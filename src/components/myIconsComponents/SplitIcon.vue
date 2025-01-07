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
  <div class="split">
    <svg
      t="1726398603276"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="29985"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M802.59 406.48H221.4c-11.47 0-20.76-9.3-20.76-20.76s9.29-20.76 20.76-20.76h581.19c11.47 0 20.76 9.3 20.76 20.76 0 11.47-9.29 20.76-20.76 20.76zM802.59 645.19H221.4c-11.47 0-20.76-9.3-20.76-20.76s9.29-20.76 20.76-20.76h581.19c11.47 0 20.76 9.3 20.76 20.76s-9.29 20.76-20.76 20.76z"
        fill="#707070"
        p-id="29986"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less">
.split {
  cursor: pointer;
}
</style>
