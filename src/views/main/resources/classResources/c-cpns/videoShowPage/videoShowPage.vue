<template>
  <div class="video-showPage">
    <div class="closeBtn" @click="videoPageClickHandler">
      <div class="background">
        <button class="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <div class="page-left">
      <div class="video">
        <div class="video-item">
          <video-player class="video"></video-player>
        </div>
        <div class="video-info">
          <videoShwoPageVideoInfo></videoShwoPageVideoInfo>
        </div>
      </div>
    </div>
    <div class="page-right">
      <div class="videoLis"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import videoShwoPageVideoInfo from '../videoShowPageVideoInfo/videoShwoPageVideoInfo.vue'

const videoPageClickHandler = () => {}
</script>

<style lang="less" scoped>
.video-showPage {
  box-sizing: border-box;
  display: flex;
  padding: 20px;
  position: relative;
  width: 70%;
  min-width: 1000px;
  height: 90%;
  background-color: #fff;
  border-radius: 10px;
  .closeBtn {
    /* From Uiverse.io by ArturCodeCraft */
    /* <reset-style> ============================ */
    position: absolute;
    right: -80px;
    top: -15px;
    button {
      border: none;
      background: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      font-family: inherit;
    }
    /* ============================ */
    /* <style for bg> ======== */
    .background {
      border-radius: 16px;
      border: 1px solid #1a1a1a;
      background: rgba(255, 255, 255, 0.8);
      mix-blend-mode: luminosity;
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(15px);
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* <style for menu__icon> ======== */
    .menu__icon {
      width: 32px;
      height: 32px;
      padding: 4px;
    }

    .menu__icon span {
      display: block;
      width: 100%;
      height: 0.125rem;
      border-radius: 2px;
      background-color: rgb(0, 0, 0);
      box-shadow: 0 0.5px 2px 0 hsla(0, 0%, 0%, 0.2);
      transition: background-color 0.4s;
      position: relative;
    }

    .menu__icon span + span {
      margin-top: 0.375rem;
    }

    .menu__icon span:nth-child(1) {
      animation: ease 0.8s menu-icon-top-2 forwards;
    }

    .menu__icon span:nth-child(2) {
      animation: ease 0.8s menu-icon-scaled-2 forwards;
    }

    .menu__icon span:nth-child(3) {
      animation: ease 0.8s menu-icon-bottom-2 forwards;
    }

    .menu__icon:hover span:nth-child(1) {
      animation: ease 0.8s menu-icon-top forwards;
    }

    .menu__icon:hover span:nth-child(2) {
      animation: ease 0.8s menu-icon-scaled forwards;
    }

    .menu__icon:hover span:nth-child(3) {
      animation: ease 0.8s menu-icon-bottom forwards;
      background-color: rgb(255, 59, 48);
    }

    @keyframes menu-icon-top {
      0% {
        top: 0;
        transform: rotate(0);
      }

      50% {
        top: 0.5rem;
        transform: rotate(0);
      }

      100% {
        top: 0.5rem;
        transform: rotate(45deg);
      }
    }

    @keyframes menu-icon-top-2 {
      0% {
        top: 0.5rem;
        transform: rotate(45deg);
      }

      50% {
        top: 0.5rem;
        transform: rotate(0);
      }

      100% {
        top: 0;
        transform: rotate(0);
      }
    }

    @keyframes menu-icon-bottom {
      0% {
        bottom: 0;
        transform: rotate(0);
      }

      50% {
        bottom: 0.5rem;
        transform: rotate(0);
      }

      100% {
        bottom: 0.5rem;
        transform: rotate(135deg);
      }
    }

    @keyframes menu-icon-bottom-2 {
      0% {
        bottom: 0.5rem;
        transform: rotate(135deg);
      }

      50% {
        bottom: 0.5rem;
        transform: rotate(0);
      }

      100% {
        bottom: 0;
        transform: rotate(0);
      }
    }

    @keyframes menu-icon-scaled {
      50% {
        transform: scale(0);
      }

      100% {
        transform: scale(0);
      }
    }

    @keyframes menu-icon-scaled-2 {
      0% {
        transform: scale(0);
      }

      50% {
        transform: scale(0);
      }

      100% {
        transform: scale(1);
      }
    }
  }
  .page-left {
    flex: 1;
    padding: 0 10px;
    box-sizing: border-box;
    .video {
      width: 100%;
      .video-item {
        width: 100%;
        min-width: 600px;
        height: 24vw;
        .video {
          width: 100%;
          height: 100%;
        }
      }
    }
    .video-info {
    }
  }
  .page-right {
    width: 20vw;
  }
}
</style>
