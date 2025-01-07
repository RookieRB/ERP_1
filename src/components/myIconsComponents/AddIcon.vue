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
  <div class="add">
    <svg
      t="1725521854506"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="9366"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M832 85.333333h-640C132.266667 85.333333 85.333333 132.266667 85.333333 192v640C85.333333 891.733333 132.266667 938.666667 192 938.666667h640c59.733333 0 106.666667-46.933333 106.666667-106.666667v-640C938.666667 132.266667 891.733333 85.333333 832 85.333333zM682.666667 554.666667h-128v128c0 21.333333-21.333333 42.666667-42.666667 42.666666s-42.666667-21.333333-42.666667-42.666666v-128H341.333333c-21.333333 0-42.666667-21.333333-42.666666-42.666667s21.333333-42.666667 42.666666-42.666667h128V341.333333c0-21.333333 21.333333-42.666667 42.666667-42.666666s42.666667 21.333333 42.666667 42.666666v128h128c21.333333 0 42.666667 21.333333 42.666666 42.666667s-21.333333 42.666667-42.666666 42.666667z"
        p-id="9367"
        data-spm-anchor-id="a313x.search_index.0.i9.6dae3a81A8sbZ5"
        class="selected"
        fill="#5a4bea"
      ></path>
    </svg>
  </div>
</template>

<style scoped lang="less">
.add {
  transition: all 1s;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
