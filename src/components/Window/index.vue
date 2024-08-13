<template>
  <div class="window glass-material">
    <!-- 默认插槽 -->
    <slot></slot>
  </div>
  <div class="above-window"></div>
  <div class="below-window">
    <!-- 装饰品插槽 -->
    <slot name="ornaments"></slot>
    <div class="window-bar"></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheWindow'
})
</script>

<style scoped lang="scss">
.below-window {
  // border: 1px solid red;
  // 定位
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 200px);
  .window-bar {
    // 尺寸
    width: 70px;
    height: 6px;
    // 边框
    border-radius: 4px;
    // 背景
    background-color: rgba(255, 255, 255, 0.3);
    // 阴影
    box-shadow: 0 1px 10px -1px rgba(0, 0, 0, 0.18);
    // 定位
    position: relative;
    margin-top: 14px;

    &::before {
      content: '';
      display: block;
      // 尺寸
      width: 8px;
      height: 8px;
      // 边框
      border-radius: 50%;
      // 背景
      background-color: rgba(255, 255, 255, 0.3);
      // 阴影
      box-shadow: 0 1px 10px -1px rgba(0, 0, 0, 0.18);
      // 定位
      position: absolute;
      top: -1px;
      left: -20px;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    &:hover::before {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
