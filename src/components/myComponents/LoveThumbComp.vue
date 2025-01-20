<template>
  <div class="loveThumbComp">
    <label class="label46">
      <input type="checkbox" class="checkbox46" />
      <div class="btn46"></div>
      <div class="ani46"></div>
    </label>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.loveThumbComp {
  .label46 {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .checkbox46 {
      display: none;
    }
    .btn46 {
      width: 31px;
      height: 17px;
      position: relative;
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 10px;
        width: 10px;
        height: 15px;
        background-color: #666666;
        border-radius: 30px 30px 0 0;
        transform: rotate(-45deg);
        transition: all 0.4s;
      }
      &::before {
        left: 15px;
        transform: rotate(45deg);
      }
    }
    .ani46 {
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-radius: 50%;
      box-shadow:
        0.3247595264rem -3rem 0 -0.1875rem #ff8080,
        -0.3247595264rem -2.625rem 0 -0.1875rem #ffed80,
        2.5479787002rem -1.6165621836rem 0 -0.1875rem #ffed80,
        1.849823389rem -1.8905679518rem 0 -0.1875rem #a4ff80,
        2.8525179434rem 0.9841799289rem 0 -0.1875rem #a4ff80,
        2.6314516119rem 0.2675003341rem 0 -0.1875rem #80ffc8,
        1.0090529945rem 2.8438144813rem 0 -0.1875rem #80ffc8,
        1.4315458888rem 2.2241360615rem 0 -0.1875rem #80c8ff,
        -1.5942494402rem 2.5619987261rem 0 -0.1875rem #80c8ff,
        -0.8462596573rem 2.5059747482rem 0 -0.1875rem #a480ff,
        -2.9970495249rem 0.3509456756rem 0 -0.1875rem #a480ff,
        -2.4852584623rem 0.9012514787rem 0 -0.1875rem #ff80ed,
        -2.1430097676rem -2.1243765377rem 0 -0.1875rem #ff80ed,
        -2.2325539005rem -1.3749478496rem 0 -0.1875rem #ff8080;
      opacity: 0;
    }
    .checkbox46:checked + .btn46:before,
    .checkbox46:checked + .btn46:after {
      background-color: #ff0000;
    }
    .checkbox46:checked + .btn46 {
      animation: love-eff46 0.4s ease-out forwards;
    }
    .checkbox46:checked ~ .ani46 {
      animation: anieff46 1s ease-out forwards;
    }
    @keyframes love-eff46 {
      50% {
        transform: scaleY(0.6);
      }
      100% {
        transform: scaleY(1);
      }
    }
    @keyframes anieff46 {
      0% {
        transform: scale(0);
      }
      40% {
        opacity: 1;
      }
      100% {
        transform: scale(1.3);
        opacity: 0;
      }
    }
  }
}
</style>
