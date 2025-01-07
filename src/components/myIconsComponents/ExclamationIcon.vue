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
  <div class="exclamation">
    <svg
      t="1725888358050"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="55517"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M512 25.6c268.629333 0 486.4 217.770667 486.4 486.4S780.629333 998.4 512 998.4 25.6 780.629333 25.6 512 243.370667 25.6 512 25.6z m0 76.8C285.781333 102.4 102.4 285.781333 102.4 512S285.781333 921.6 512 921.6 921.6 738.218667 921.6 512 738.218667 102.4 512 102.4zM512 640a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667z m38.4-384v341.333333h-76.8V256h76.8z"
        fill="#b9babf"
        p-id="55518"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less">
.exclamation {
}
</style>
