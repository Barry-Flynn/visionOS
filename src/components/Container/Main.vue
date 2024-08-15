<template>
  <div class="main">
    <!-- 默认插槽 -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ContainerMain'
})
</script>

<style scoped lang="scss">
.main {
  height: 150px;
  text-align: center;
  // 布局
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; // 等价于flex-grow: 1; flex-shrink: 1; flex-basis: 0; 使得main占据剩余空间
}
</style>
