<template>
  <div class="video-info-card">
    <div class="video-wrapper" @click="videoCardClickHandler">
      <div class="video-card">
        <img src="@/assets/img/show.jpg" alt="" />
      </div>
      <div class="video-details">
        <div class="publish-user">
          <avatar></avatar>
        </div>
        <div class="details-right">
          <div class="text">
            冰岛｜穿越55km世界最美徒步路线！北欧兰德曼纳劳卡！哈苏X2D特别版 4K HDR
          </div>
          <div class="publisher-name">Links TV</div>
          <div class="other">
            <span class="watch-counter">31万次观看</span>·
            <span class="publish-time">2个月前</span>
          </div>
        </div>
      </div>
      <div class="video-mask"></div>
    </div>
    <div class="video-more">
      <ShuMoreIcon></ShuMoreIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatar from '@/components/avatar/avatar.vue'
import ShuMoreIcon from '@/components/myIconsComponents/ShuMoreIcon.vue'

// 更多按钮点击处理相关逻辑
const moreClickHandler = () => {}

// 视频卡片处理相关逻辑
const videoCardClickHandler = () => {}
</script>

<style lang="less" scoped>
.video-info-card {
  position: relative;
  width: 16.5vw;
  height: 17.5vw;
  user-select: none;
  .video-wrapper {
    position: relative;
    box-sizing: border-box;
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
    &:active {
      .video-mask {
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
    .video-mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transition: background 0.25s ease;
    }
    .video-card {
      border-radius: 14px;
      overflow: hidden;
      &:hover {
        cursor: pointer;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-user-drag: none;
      }
    }
    .video-details {
      position: relative;
      box-sizing: border-box;
      padding-right: 15px;
      display: flex;
      flex-direction: row;
      margin-top: 7px;
      gap: 10px;

      &:hover {
        cursor: pointer;
      }
      .publish-user {
      }
      .details-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
        .text {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 15px;
        }
        .publisher-name {
          color: #606060;
          font-size: 14px;
        }
        .other {
          font-size: 13px;
          color: #606060;
          .watch-counter {
          }
          .publish-time {
          }
        }
      }
    }
  }
  .video-more {
    position: absolute;
    right: -10px;
    top: 55%;
    z-index: 9;
    cursor: pointer;
  }
}
</style>
