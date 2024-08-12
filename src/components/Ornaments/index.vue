<template>
  <div class="ornaments glass-material">Ornaments</div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheOrnaments'
})
</script>

<style scoped lang="scss">
.ornaments {
  // 尺寸
  width: 250px;
  height: 50px;
  // 定位
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 180px);
  // 自动布局
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
}
</style>
