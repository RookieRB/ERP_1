<template>
  <div class="new-icon">
    <svg
      t="1732862009090"
      class="icon"
      viewBox="0 0 1941 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="26023"
      :width="iconWidth"
      :height="iconHeight"
    >
      <path d="M0 0h1941.853659v1024H0z" fill="#FC444C" p-id="26024"></path>
      <path
        d="M661.853659 774.243902h-151.93496l-193.560975-414.178861-2.081301 2.0813v410.016261h-99.902439V278.894309h158.178862l187.317073 391.284553 2.081301-2.081301V278.894309h99.902439v495.349593zM745.105691 774.243902V278.894309h333.00813v83.252032H853.333333v114.471545h208.130082v83.252033H853.333333v131.121951h233.105691v83.252032H745.105691zM1319.544715 651.447154L1415.284553 278.894309h120.715447l85.333333 372.552845h2.081301l81.170732-372.552845h99.902439l-126.95935 495.349593H1560.97561L1471.479675 395.447154l-95.739838 378.796748h-120.715447l-120.715447-495.349593h110.308943l74.926829 372.552845z"
        fill="#FFFFFF"
        p-id="26025"
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
.new-icon {
}
</style>
