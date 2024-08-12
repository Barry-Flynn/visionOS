<template>
  <div class="window glass-material">Window</div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheWindow'
})
</script>

<style scoped lang="scss">
.window {
  // 尺寸
  width: 700px;
  height: 400px;
  // 定位
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
