<script setup lang="ts"></script>

<template>
  <div class="user-info">
    <div class="user-top">
      <div class="top-left">
        <div class="top-item">
          <component is="CombineIcon" icon-width="25" icon-height="25"></component>
        </div>
        <div class="top-item">
          <component is="SplitIcon" icon-width="25" icon-height="25"></component>
        </div>
      </div>
      <div class="top-right">
        <div class="top-item">
          <component is="MoreIcon" icon-width="25" icon-height="25"></component>
        </div>
        <div class="top-item">
          <component is="YouShangArrowIcon" icon-width="25" icon-height="25"></component>
        </div>
      </div>
    </div>
    <div class="user-content">
      <div class="user-img">
        <img src="@/assets/img/avatar01.jpg" alt="" />
      </div>
      <div class="user-name">Eva Robinson</div>
      <div class="user-role">CEO.Inc.Alabama Machinery</div>
      <div class="supply">& Supply</div>
      <div class="list">
        <div class="list-item">
          <component is="EditorIcon" icon-height="2vw" icon-width="2vw"></component>
        </div>
        <div class="list-item">
          <component is="MessageIcon" icon-height="2vw" icon-width="2vw"></component>
        </div>
        <div class="list-item">
          <component is="PhoneIcon" icon-height="2vw" icon-width="2vw"></component>
        </div>
        <div class="list-item">
          <component is="AddIcon" icon-height="2vw" icon-width="2vw"></component>
        </div>
        <div class="list-item">
          <component is="CalendarIcon" icon-height="2vw" icon-width="2vw"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.user-info {
  .card-style();
  .user-top {
    display: flex;
    .top-item {
      box-sizing: border-box;
      padding: 10px;
      border-radius: 25px;
      background: #ebf3fe;
    }
    .top-left {
      flex: 1;
      display: flex;
      gap: 1vw;
    }
    .top-right {
      display: flex;
      gap: 1vw;
    }
  }
  .user-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .user-img {
      height: 6vw;
      width: 6vw;
      transform: translateY(-20px);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
      }
    }
    .user-name {
      font-size: 1vw;
      font-weight: bold;
    }
    .user-role {
      margin-top: 20px;
      color: #a7a7a7;
    }
    .supply {
      margin-top: 5px;
      color: #a7a7a7;
    }
    .list {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      gap: 0.5vw;
      .list-item {
        box-sizing: border-box;
        padding: 15px;
        cursor: pointer;
        border-radius: 50%;
        &:hover {
          background: #ebf3fe;
        }
      }
    }
  }
}
</style>
