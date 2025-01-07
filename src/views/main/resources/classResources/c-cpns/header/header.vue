<template>
  <div class="header">
    <div class="headr_bar">
      <header-bar></header-bar>
    </div>
    <!-- <div class="header_banner">
      <div class="animated-banner" @mousemove="mouseMoveHandler" @mouseleave="mouseLeaveHandler">
        <template v-for="(item, index) in bgArray">
          <div class="layer">
            <img
              :src="getImageUrl(item.path)"
              alt=""
              :data-item-index="index"
              :data-item-id="item.id"
              :data-item-scale="item.scale"
              ref="imgRef"
              style="transform: translate(0px, 0px) rotate(0deg) scale(1); opacity: 1"
            />
          </div>
        </template>
      </div>
      <img src="@/assets/img/bg2.png" alt="" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import headerBar from '../headerBar/headerBar.vue'
// import { bgArray } from './bgArray'
// import { onMounted, ref, watch, onBeforeUnmount, reactive } from 'vue'
// import { getTranslateX } from '@/utils/common'

// const headerRef = ref<HTMLElement | null>(null)

// const haderBarRef = ref()

// let lastScreenX: number | null = null
// 节流函数：每隔一定时间执行一次
// const throttle = (func: Function, wait: number) => {
//   let timeout: ReturnType<typeof setTimeout> | null = null
//   return (...args: any[]) => {
//     if (!timeout) {
//       timeout = setTimeout(() => {
//         func(...args)
//         timeout = null
//       }, wait)
//     }
//   }
// }

// 更新 header 宽高
// const updateHeaderSize = () => {
//   if (headerRef.value) {
//     // 更新headerBar的宽度
//     haderBarRef.value.style.width = headerRef.value.clientWidth + 'px'
//   }
// }
// // 使用 ResizeObserver 来监听元素尺寸变化
// const resizeObserver = new ResizeObserver(
//   throttle(() => {
//     updateHeaderSize()
//   }, 0),
// ) // 设置节流时间为 200 毫秒

// const initHeaderBackground = () => {
//   if (imgRef.value) {
//     for (const index in imgRef.value) {
//       imgRef.value[index].style.zIndex = bgArray[Number(index)].zIndex
//       imgRef.value[index].style.userSelect = 'none'
//       if (bgArray[Number(index)].id === 3) {
//         imgRef.value[index].style.transform = ' translate(100px, 0px) rotate(0deg) scale(1)'
//       }
//       if (bgArray[Number(index)].id === 2) {
//         imgRef.value[index].style.transform = ' translate(300px, 0px) rotate(0deg) scale(1)'
//       }
//     }
//   }
// }

// const mouseMoveHandler = throttle((event: any) => {
//   if (lastScreenX === null) {
//     lastScreenX = event.screenX
//   } else {
//     let subNumber = event.screenX - lastScreenX

//     for (const index in bgArray) {
//       let [tranlateX, tranlateY, rotate, scale] = getTranslateX(imgRef.value[index].style.transform)
//       if (bgArray[index].move === 'slow') {
//         imgRef.value[index].style.transform =
//           `translate(${tranlateX + subNumber * 0.01}px, 0px) rotate(0deg) scale(1)`
//       } else if (bgArray[index].move === 'fast') {
//         if (bgArray[index].id === 3) {
//           imgRef.value[index].style.transform =
//             `translate(${tranlateX + subNumber * 0.04}px, 0px) rotate(0deg) scale(${scale - subNumber * 0.0002})`
//         } else if (bgArray[index].id === 2) {
//           imgRef.value[index].style.transform =
//             `translate(${tranlateX + subNumber * 0.05}px, 0px) rotate(${rotate + subNumber * 0.01}deg) scale(1)`
//         } else {
//           imgRef.value[index].style.transform =
//             `translate(${tranlateX + subNumber * 0.04}px, 0px) rotate(0deg) scale(1)`
//         }
//       } else if (bgArray[index].move === 'faster') {
//         imgRef.value[index].style.transform =
//           `translate(${tranlateX + subNumber * 0.07}px, 0px) rotate(0deg) scale(1)`
//       }
//     }
//     lastScreenX = event.screenX
//   }
// }, 0)

// const mouseLeaveHandler = throttle((event: any) => {
//   lastScreenX = null
//   for (const index in bgArray) {
//     imgRef.value[index].style.transition = 'transform 0.15s'
//     // 添加 transitionend 事件监听器
//     imgRef.value[index].addEventListener('transitionend', function handler() {
//       // 当 transition 完成时，将 transition 设置为 none
//       imgRef.value[index].style.transition = 'none'

//       // 移除事件监听器，防止重复触发
//       imgRef.value[index].removeEventListener('transitionend', handler)
//     })
//     if (bgArray[index].id === 2) {
//       imgRef.value[index].style.transform = ' translate(300px, 0px) rotate(0deg) scale(1)'
//     } else if (bgArray[index].id === 3) {
//       imgRef.value[index].style.transform = ' translate(100px, 0px) rotate(0deg) scale(1)'
//     } else {
//       imgRef.value[index].style.transform = 'translate(0px, 0px) rotate(0deg) scale(1)'
//     }
//   }
// }, 0)

// onMounted(() => {
//   // 初始化时更新一次宽高
//   updateHeaderSize()

//   // // 定义背景初始样式
//   // initHeaderBackground()

//   if (headerRef.value) {
//     resizeObserver.observe(headerRef.value)
//   }
// })

// // 在组件销毁时停止观察
// onBeforeUnmount(() => {
//   if (headerRef.value) {
//     resizeObserver.unobserve(headerRef.value)
//   }
// })
// const getImageUrl = (name: string) => {
//   return new URL(`../../../../../../assets/headerImg/${name}`, import.meta.url).href
// }
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  .headr_bar {
    z-index: 999;
  }
}
</style>
