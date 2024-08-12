<template>
  <div class="tab-bar glass-material">TabBar</div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TabBar'
})
</script>

<style scoped lang="scss">
.tab-bar {
  // 尺寸
  width: 42px;
  height: 224px;
  // 定位
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-410px, -50%);
  // 自动布局
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 8px 12px 8px;
}
</style>
