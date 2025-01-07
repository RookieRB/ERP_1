<template>
  <div class="class-resources">
    <div class="top">
      <classHeadr></classHeadr>
    </div>
    <div class="container">
      <videoInfoCard></videoInfoCard>
      <videoInfoCard></videoInfoCard>
      <videoInfoCard></videoInfoCard>
      <videoInfoCard></videoInfoCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import classHeadr from './c-cpns/header/header.vue'
import videoInfoCard from './c-cpns/videoInfoCard/videoInfoCard.vue'
</script>

<style lang="less" scoped>
.class-resources {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .top {
    width: 100%;
  }
  .container {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    box-sizing: border-box;
    padding: 20px;
  }
}
</style>
