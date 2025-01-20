<template>
  <div class="video-showPage-videoInfo">
    <div class="videoInfo-title">
      50首超好聽的流行歌曲💖2024年 , 11月份爆火全網的歌曲【動態歌詞Pinyin Lyrics】王宇宙Leto喬浚丞 -
      若月亮沒 . en - 妥協 , 小燦 - 斷送青春愛錯人, 我會等
    </div>
    <div class="userInfo">
      <div class="userInfo-left">
        <div class="userImg">
          <img src="@/assets/img/avatar.jpg" alt="" />
        </div>
        <div class="userDesc">
          <div class="userName">熱歌 Playlist</div>
          <div class="userRole">CEO</div>
        </div>
      </div>
      <div class="userInfo-right">
        <div class="thumbs-up">
          <LoveThumbComp></LoveThumbComp>
          <div class="number">11111</div>
        </div>
        <div class="download">
          <DownLoadComp></DownLoadComp>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoveThumbComp from '@/components/myComponents/LoveThumbComp.vue'
import DownLoadComp from '@/components/myComponents/DownLoadComp.vue'
</script>

<style lang="less" scoped>
.video-showPage-videoInfo {
  .videoInfo-title {
    font-size: 15px;
    font-weight: 550;
    line-height: 20px;
  }
  .userInfo {
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .userInfo-left {
      display: flex;
      .userImg {
        width: 30px;
        height: 30px;
        border-radius: 25px;
        overflow: hidden;
        &:hover {
          cursor: pointer;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .userDesc {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-left: 10px;
        font-size: 12px;
        font-weight: 500;
        .userName {
        }
        .userRole {
          font-size: 11px;
        }
      }
    }
    .userInfo-right {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5vw;
      .thumbs-up {
        display: flex;
        justify-content: center;
        border-radius: 25px;
        padding: 2px 5px;
        background: #f2f2f2;
        .number {
          display: flex;
          align-items: center;
          border-left: 1.5px solid #ddd;
          margin: 5px 5px;
          padding-left: 5px;
          font-size: 13px;
        }
      }
      .download {
        width: 100px;
      }
    }
  }
}
</style>
