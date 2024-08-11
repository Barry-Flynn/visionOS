<template>
  <div class="ornaments">Ornaments</div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheOrnaments'
})
</script>

<style scoped>
.ornaments {
  width: 250px;
  height: 60px;
  /* 定位 */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 180px);
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
  /* 渐变样式 */
  border-radius: 500px;
  box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(24px);
  background: linear-gradient(
    134.04deg,
    rgba(255, 255, 255, 0.5) -21.029%,
    rgba(235, 235, 235, 0.37) 3.26%,
    rgba(224, 224, 224, 0.29) 13.031%,
    rgba(212, 212, 212, 0.21) 27.271%,
    rgba(207, 207, 207, 0.18) 37.182%,
    rgba(202, 202, 202, 0.14) 43.833%,
    rgba(200, 200, 200, 0.13) 50.049%,
    rgba(196, 196, 196, 0.1) 59.822%
  );
}
</style>
