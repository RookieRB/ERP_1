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
  <div class="users">
    <svg
      t="1725521705760"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="890"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M512 117.4016a138.6496 138.6496 0 1 0 0 277.3504 138.6496 138.6496 0 0 0 0-277.3504zM309.3504 256.0512a202.6496 202.6496 0 1 1 405.2992 0 202.6496 202.6496 0 0 1-405.2992 0zM96 938.752a416 416 0 0 1 832 0 32 32 0 1 1-64 0 352.0512 352.0512 0 0 0-307.8144-349.2864l71.7312 233.1648c3.072 10.1376 1.024 21.1456-5.632 29.44l-85.2992 106.6496a32 32 0 0 1-49.9712 0l-85.3504-106.6496a32 32 0 0 1-5.5808-29.44l71.7312-233.1648a352.0512 352.0512 0 0 0-307.8144 349.2864 32 32 0 1 1-64 0zM512 663.552l-49.7664 161.792 49.7664 62.1568 49.7664-62.208L512 663.552z"
        p-id="891"
        fill="#515151"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less">
.users {
}
</style>
