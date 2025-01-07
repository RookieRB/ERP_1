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
  <div class="editor">
    <svg
      t="1726454932650"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="16077"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M540.128 425.376l-37.504-37.504L320 570.496V608h37.504l182.624-182.624z m45.248-45.248l79.52-79.552-37.472-37.472-79.552 79.52 37.504 37.504zM256 544L627.424 172.576l128 128L384 672H256v-128z m0 192h512v64H256v-64z"
        fill="#8a8a8a"
        p-id="16078"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less"></style>
