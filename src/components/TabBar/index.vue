<template>
  <div
    class="tab-bar glass-material"
    :class="{ expanded: expanded }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="tab-item" v-for="tab in props.tabs" :key="tab.name" :class="{ active: tab.active }">
      <div class="tab-item-icon" :class="'mgc_' + tab.icon"></div>
      <div class="tab-item-name ellipsis" v-show="expanded">
        {{ tab.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Tab } from '@/types/tabBar'
import { ref } from 'vue'

defineOptions({
  name: 'TabBar'
})

// 接收参数
const props = defineProps<{
  // 要显示的标签项对象数组
  tabs: Tab[]
}>()

// 是否展开
let expanded = ref(false)
// 光标移入 1 秒后自动展开（150px）
const handleMouseEnter = () => {
  setTimeout(() => {
    // console.log('mouse enter')
    expanded.value = true
  }, 1000)
}
// 光标移出 1 秒后自动收起（42px）
const handleMouseLeave = () => {
  setTimeout(() => {
    // console.log('mouse leave')
    expanded.value = false
  }, 1000)
}
</script>

<style scoped lang="scss">
.tab-bar {
  // 尺寸
  width: 42px;
  min-height: 78px; // 最小高度为仅有2个标签项时的高度，因为只有1个标签项时无意义
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
  // 边框，用于覆盖glass-material部分属性，从而获得更好效果
  border-radius: 21px;
  // 过渡动画
  transition:
    width 0.4s,
    transform 0.4s;

  &.expanded {
    width: 150px;
    transform: translate(-494px, -50%) scale(1.02);
  }

  .tab-item {
    border-radius: 14px;
    // 布局
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.9);
    }
    &:active {
      background-color: rgba(255, 255, 255, 0.2);
    }
    &.active {
      background-color: rgba(255, 255, 255, 0.3);
      color: rgba(255, 255, 255, 0.9);
    }

    &:not(:first-child) {
      margin-top: 8px;
    }

    .tab-item-icon {
      width: 28px;
      height: 28px;
      font-size: 14px;
      // 布局
      display: inline-flex;
      justify-content: center;
      align-items: center;
      // 不缩小
      flex-shrink: 0;
    }
  }
}
</style>
