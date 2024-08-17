<template>
  <button class="button" type="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheButton'
})
</script>

<style scoped lang="scss">
.button {
  // 尺寸
  width: 24px;
  height: 24px;
  // 边框
  border: none;
  border-radius: 50%;
  // 背景
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
