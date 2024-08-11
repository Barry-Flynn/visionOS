<template>
  <div class="tab-bar">TabBar</div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TabBar'
})
</script>

<style scoped>
.tab-bar {
  width: 42px;
  height: 224px;
  /* 定位 */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-404px, -50%);
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 8px 12px 8px;
  /* 背景模糊 */
  border-radius: 30px;
  backdrop-filter: blur(24px);
  background: linear-gradient(
    134.04deg,
    rgba(255, 255, 255, 0.5) -17.557%,
    rgba(235, 235, 235, 0.37) 6.035%,
    rgba(224, 224, 224, 0.29) 15.526%,
    rgba(212, 212, 212, 0.21) 29.358%,
    rgba(207, 207, 207, 0.18) 38.984%,
    rgba(202, 202, 202, 0.14) 45.445%,
    rgba(200, 200, 200, 0.13) 51.482%,
    rgba(196, 196, 196, 0.1) 60.975%
  );
  /* 阴影 */
  box-shadow: 0 1px 24px -1px rgba(0, 0, 0, 0.18);
}
</style>
