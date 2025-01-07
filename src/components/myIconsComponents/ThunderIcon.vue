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
  <div class="thunder">
    <svg
      t="1725525884759"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="38689"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M512 14.8973037c-273.40648297 0-497.1026963 223.69621333-497.1026963 497.1026963s223.69621333 497.1026963 497.1026963 497.1026963 497.1026963-223.69621333 497.1026963-497.1026963-223.69621333-497.1026963-497.1026963-497.1026963z m165.70089876 472.24756148l-256.83639307 331.40179754c-8.28504494 8.28504494-16.57008987 0-16.57008988-8.28504494l49.71026962-265.12143803h-99.42053926c-8.28504494 0-8.28504494-8.28504494-8.28504493-8.28504493l256.83639307-331.40179754c8.28504494-8.28504494 16.57008987 0 16.57008988 8.28504494l-41.42522469 265.12143803h91.13549433c8.28504494 0 8.28504494 8.28504494 8.28504493 8.28504493z"
        fill="#ffaf00"
        p-id="38690"
        data-spm-anchor-id="a313x.search_index.0.i0.62d23a81hTyo2I"
        class="selected"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less">
.thunder {
  cursor: pointer;
  &:hover {
    animation: shake ease-in-out forwards 0.5s;
  }
}
</style>
