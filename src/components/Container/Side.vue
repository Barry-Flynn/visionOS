<template>
  <div class="side">
    <!-- 默认插槽 -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ContainerSide'
})
</script>

<style scoped lang="scss">
.side {
  // 尺寸
  width: 216px;
  height: 500px; // 高度等于 Window 的内容高度
  max-height: 500px; // 限制最大高度
  // 背景
  background-color: #0000003d;
  text-align: center;
  // 布局
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; // 不缩小
  // 边框
  border-radius: 30px 0 0 30px;
}
</style>
