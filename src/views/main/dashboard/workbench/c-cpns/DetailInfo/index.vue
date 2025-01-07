<script setup lang="ts"></script>

<template>
  <div class="content">
    <div class="content-top">
      <div class="content-title">Detailed information</div>
      <div class="content-right">
        <div class="editor circle">
          <component is="EditorIcon" icon-width="20" icon-height="20"></component>
        </div>
        <div class="arrow circle">
          <component is="YouShangArrowIcon" icon-width="20" icon-height="20"></component>
        </div>
      </div>
    </div>
    <div class="content-body">
      <div class="item">
        <div class="item-left-img">
          <component is="User2Icon" icon-height="24" icon-width="24"></component>
        </div>
        <div class="item-right">
          <div class="item-title">First Name</div>
          <div class="item-write">Eva</div>
        </div>
        <div class="item-icon circle">
          <component is="EditorLineIcon" icon-width="25" icon-height="25"></component>
        </div>
      </div>
      <div class="item">
        <div class="item-left-img">
          <component is="User2Icon" icon-height="24" icon-width="24"></component>
        </div>
        <div class="item-right">
          <div class="item-title">Last Name</div>
          <div class="item-write">Robinson</div>
        </div>
        <div class="item-icon circle">
          <component is="EditorLineIcon" icon-width="25" icon-height="25"></component>
        </div>
      </div>
      <div class="item">
        <div class="item-left-img">
          <component is="MessageNoColorIcon" icon-height="24" icon-width="24"></component>
        </div>
        <div class="item-right">
          <div class="item-title">Email</div>
          <div class="item-write">Eva@alabamamachinery.com</div>
        </div>
        <div class="item-icon circle">
          <component is="AddNoColorIcon" icon-width="25" icon-height="25"></component>
        </div>
      </div>
      <div class="item">
        <div class="item-left-img">
          <component is="PhoneNoColorIcon" icon-height="24" icon-width="24"></component>
        </div>
        <div class="item-right">
          <div class="item-title">Phone Number</div>
          <div class="item-write">+911 129 222 313</div>
        </div>
        <div class="item-icon circle">
          <component is="AddNoColorIcon" icon-width="25" icon-height="25"></component>
        </div>
      </div>
      <div class="item">
        <div class="item-left-img">
          <component is="SocialIcon" icon-height="24" icon-width="24"></component>
        </div>
        <div class="item-right">
          <div class="item-title">Sources</div>
          <div class="item-write icon">
            <component is="WechatIcon" icon-height="30" icon-width="30"></component>
            <component is="QQIcon" icon-height="30" icon-width="30"></component>
            <component is="FaceBookIcon" icon-height="30" icon-width="30"></component>
            <component is="WeiboIcon" icon-height="30" icon-width="30"></component>
          </div>
        </div>
        <div class="item-icon circle">
          <component is="AddNoColorIcon" icon-width="25" icon-height="25"></component>
        </div>
      </div>
      <div class="item">
        <div class="item-left-img">
          <component is="LoginIcon" icon-height="24" icon-width="24"></component>
        </div>
        <div class="item-right">
          <div class="item-title">Last Login</div>
          <div class="item-write">16/9/2024 at 11:00 am</div>
        </div>
        <div class="item-icon circle">
          <component is="YouShangArrowIcon" icon-width="25" icon-height="25"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .card-style();
  .circle {
    padding: 10px 12px;
    border-radius: 40px;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  }

  .content-top {
    display: flex;

    align-items: center;
    .content-title {
      flex: 1;
      font-size: 1.5vw;
      font-weight: bold;
    }

    .content-right {
      display: flex;
      align-items: center;
      gap: 1vw;
    }
  }

  .content-body {
    .item {
      display: flex;
      align-items: center;
      margin-top: 1.5vw;

      .item-left-img {
        padding: 10px 20px;
      }

      .item-right {
        flex: 1;
        overflow: hidden;
        .item-title {
          font-size: 0.8vw;
          margin-left: 2px;
          color: #a8a8a8;
        }

        .icon {
          display: flex;
          gap: 10px;
        }

        .item-write {
          margin-top: 5px;
          font-size: 1vw;
          font-weight: bold;
        }
      }

      .item-icon {
        background: #ebf3fe;
        cursor: pointer;
      }
    }
  }
}
</style>
