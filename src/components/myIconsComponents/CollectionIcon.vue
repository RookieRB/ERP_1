<template>
  <div class="collection-icon">
    <svg
      t="1732881892260"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5115"
      data-spm-anchor-id="a313x.search_index.0.i0.662f3a81rTc8OI"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M727.45 925.23a69.68 69.68 0 0 1-33.44-8.6l-168.41-92a42.68 42.68 0 0 0-39.7-0.63l-171.24 86.61a69.67 69.67 0 0 1-99.92-75L250.17 647a42.65 42.65 0 0 0-11.67-38L103.23 472.93a69.67 69.67 0 0 1 40.5-118.21L334 330.14a42.64 42.64 0 0 0 32.49-22.83l87.64-170.7a69.67 69.67 0 0 1 124.94 2L661.29 312A42.65 42.65 0 0 0 693 335.83l189.43 30.6a69.67 69.67 0 0 1 36.72 119.44L779.68 617.61a42.66 42.66 0 0 0-12.87 37.56l29.44 189.62a69.81 69.81 0 0 1-68.8 80.44z m-7.61-55.91A15.77 15.77 0 0 0 743 853.06l-29.46-189.62a96.57 96.57 0 0 1 29.13-85l139.51-131.77a15.76 15.76 0 0 0-8.31-27L684.44 389a96.54 96.54 0 0 1-71.87-54l-82.18-173.4a15.76 15.76 0 0 0-28.27-0.44l-87.64 170.7a96.55 96.55 0 0 1-73.54 51.67l-190.31 24.65a15.76 15.76 0 0 0-9.16 26.75L276.74 571a96.55 96.55 0 0 1 26.41 85.91l-35.43 188.62a15.77 15.77 0 0 0 22.61 17l171.24-86.59a96.52 96.52 0 0 1 89.86 1.42l168.41 92z"
        fill="#222"
        p-id="5116"
        data-spm-anchor-id="a313x.search_index.0.i2.662f3a81rTc8OI"
        class="selected"
      ></path>
      <path
        d="M512 679.11c-71.34 0-129.38-53.2-129.38-118.59a27 27 0 1 1 53.91 0c0 35.66 33.86 64.68 75.47 64.68s75.47-29 75.47-64.68a27 27 0 1 1 53.9 0c0 65.39-58.03 118.59-129.37 118.59z"
        fill="#222"
        p-id="5117"
        data-spm-anchor-id="a313x.search_index.0.i1.662f3a81rTc8OI"
        class="selected"
      ></path>
    </svg>
    <div class="text">收藏</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iconWidth: {
    type: String,
    default: '25',
  },
  iconHeight: {
    type: String,
    default: '25',
  },
})
</script>

<style lang="less" scoped>
.collection-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    svg {
      animation: jumpback 0.5s ease;
    }
  }
  .text {
    margin-top: 3px;
    font-size: 13px;
    color: #222;
  }
}
</style>
