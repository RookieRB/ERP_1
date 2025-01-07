<template>
  <div class="avatar" :style="{ height: size, width: size }">
    <img :src="img" alt="" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: '36px',
  },
  img: {
    type: String,
    default: 'src/assets/img/avatar.jpg',
  },
})
</script>

<style lang="less" scoped>
.avatar {
  border-radius: 25px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-user-drag: none;
  }
}
</style>
