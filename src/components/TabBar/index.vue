<template>
  <div class="tab-bar glass-material" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="tab-bar-item">
      <Button icon="play_circle_line" />
    </div>
    <div class="tab-bar-item">
      <Button icon="grid_line" />
    </div>
    <div class="tab-bar-item">
      <Button icon="tv_1_line" />
    </div>
    <div class="tab-bar-item">
      <Button icon="base_station_line" />
    </div>
    <div class="tab-bar-item active">
      <Button icon="album_2_line" />
    </div>
    <div class="tab-bar-item">
      <Button icon="search_line" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button/index.vue'

defineOptions({
  name: 'TabBar'
})

// 光标移入 2 秒后自动展开（150px）
const handleMouseEnter = () => {
  setTimeout(() => {
    console.log('mouse enter')
  }, 2000)
}
// 光标移出 1 秒后自动收起（42px）
const handleMouseLeave = () => {
  setTimeout(() => {
    console.log('mouse leave')
  }, 1000)
}
</script>

<style scoped lang="scss">
.tab-bar {
  // 尺寸
  width: 42px;
  // height: 224px;
  min-height: 60px;
  // 定位
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-494px, -50%);
  // 背景模糊，用于覆盖glass-material部分属性，从而获得更好效果
  backdrop-filter: blur(8px);
  // 自动布局
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6px;
  // 禁止鼠标选中
  user-select: none;
  // 过渡动画
  transition: width 1s;

  .tab-bar-item {
    border-radius: 14px;

    &.active {
      background-color: rgba(255, 255, 255, 0.3);
    }

    &:not(:first-child) {
      margin-top: 8px;
    }
  }
}
</style>
