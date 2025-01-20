<template>
  <div class="class-resources">
    <div class="top">
      <classHeadr></classHeadr>
    </div>
    <div class="container">
      <template  v-for="item in 12">
        <videoInfoCard></videoInfoCard>
      </template>
    </div>
    <div class="videoShowPage" ref="videoShowPageRef">
      <videoShowPage></videoShowPage>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import classHeadr from './c-cpns/header/header.vue'
import videoInfoCard from './c-cpns/videoInfoCard/videoInfoCard.vue'
import videoShowPage from './c-cpns/videoShowPage/videoShowPage.vue';


const videoShowPageRef = ref()



</script>

<style lang="less" scoped>
.class-resources {
  position: relative;
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
    overflow: auto;
  }
  .videoShowPage{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index:999;

  }
}
</style>
