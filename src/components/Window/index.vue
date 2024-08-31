<template>
  <div>
    <div class="window glass-material">
      <!-- 默认插槽 -->
      <slot></slot>
    </div>

    <div class="above-window">
      <slot name="navigation"></slot>
    </div>

    <div class="below-window">
      <!-- 装饰插槽 -->
      <slot name="ornaments"></slot>

      <div class="window-controls">
        <div class="close-dot">
          <Button class="close-button" icon="close_fill" bg @click="closeWindow" />
        </div>
        <div class="drag-bar"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheWindow'
})

import { useRouter } from 'vue-router'
import Button from '@/components/Button/index.vue'

const router = useRouter()
// 窗口关闭事件
const closeWindow = () => {
  // 跳转到 apps 页面
  router.push('/apps')
}
</script>

<style scoped lang="scss">
.above-window {
  // border: 1px solid red;
  // 定位
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-100% - 250px)); // 以左下角为原点，向上偏移 window 高度的一半
}

.below-window {
  // border: 1px solid red;
  // 定位
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 250px); // 以左上角为原点，向下偏移 window 高度的一半

  .window-controls {
    // border: 1px solid yellow;
    margin-top: 16px;
    // 布局
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;

    .close-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 1px 10px -1px rgba(0, 0, 0, 0.18);
      // 定位
      top: -1px;
      left: -20px;
      // 布局
      display: flex;
      justify-content: center;
      align-items: center;

      .close-button {
        // 缩放
        transform: scale(0);
        transition: all 0.3s;
      }

      &:hover {
        background-color: transparent;

        .close-button {
          transform: scale(1);
        }
      }
    }

    .drag-bar {
      // 尺寸
      width: 70px;
      height: 6px;
      // 边框
      border-radius: 4px;
      // 背景
      background-color: rgba(255, 255, 255, 0.3);
      // 阴影
      box-shadow: 0 1px 10px -1px rgba(0, 0, 0, 0.18);

      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
      }
    }
  }
}
</style>
