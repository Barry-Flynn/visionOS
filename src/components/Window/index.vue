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
        <div class="close-dot" :class="{ 'is-hide': isMoving }">
          <Button class="close-button" icon="close_fill" bg highlighted @click="closeWindow" />
        </div>
        <div
          class="move-bar"
          @mousedown="handleMoveBarMouseDown"
          @mouseup="handleMoveBarMouseUp"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheWindow'
})

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/Button/index.vue'

const router = useRouter()
// 窗口关闭事件
const closeWindow = () => {
  // 跳转到 home 页面
  router.push('/home')
}

// 当前是否处于移动状态
const isMoving = ref(false)
// 鼠标按住 move bar 时触发
const handleMoveBarMouseDown = () => {
  isMoving.value = true
}
// 鼠标松开 move bar 时触发
const handleMoveBarMouseUp = () => {
  isMoving.value = false
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

      &.is-hide {
        // 缩放
        transform: scale(0);
      }
    }

    .move-bar {
      // 尺寸
      width: 70px;
      height: 6px;
      // 边框
      border-radius: 4px;
      // 背景
      background-color: rgba(255, 255, 255, 0.3);
      // 阴影
      box-shadow: 0 1px 10px -1px rgba(0, 0, 0, 0.18);
      // 过渡
      transition: all 0.2s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
      }

      &:active {
        background-color: rgba(255, 255, 255, 0.8);
        width: 64px;
      }
    }
  }
}
</style>
