<template>
  <div class="close-icon">
    <svg
      t="1732633408214"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8083"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path
        d="M511.984 512.016m-511.984 0a511.984 511.984 0 1 0 1023.968001 0 511.984 511.984 0 1 0-1023.968001 0Z"
        fill="#515151"
        fill-opacity=".1"
        p-id="8084"
        data-spm-anchor-id="a313x.search_index.0.i14.5e3f3a81V5zzOL"
        class="selected"
      ></path>
      <path
        d="M547.118903 512.016L696.682229 362.452673a24.767226 24.767226 0 1 0-35.070904-35.070904L512.047999 476.945095 362.420674 327.317771A24.767226 24.767226 0 1 0 327.34977 362.260679L476.977094 512.016l-149.75532 149.75532a24.767226 24.767226 0 1 0 35.134902 35.006906L511.920002 547.2149l149.627325 149.563326a24.767226 24.767226 0 1 0 35.070904-35.070904L547.182901 512.016z"
        fill="#2c2c2c"
        p-id="8085"
        data-spm-anchor-id="a313x.search_index.0.i13.5e3f3a81V5zzOL"
        class=""
      ></path>
    </svg>
  </div>
</template>

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

<style lang="less" scoped>
.close-icon {
}
</style>
