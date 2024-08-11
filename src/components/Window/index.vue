<template>
  <div class="window">Window</div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheWindow'
})
</script>

<style scoped>
.window {
  width: 700px;
  height: 400px;
  /* 居中 */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 背景模糊 */
  backdrop-filter: blur(24px);
  /* 填充-线性渐变 */
  background: linear-gradient(
    134.04deg,
    rgba(255, 255, 255, 0.5) -20.156%,
    rgba(235, 235, 235, 0.37) 3.958%,
    rgba(224, 224, 224, 0.29) 13.659%,
    rgba(212, 212, 212, 0.21) 27.796%,
    rgba(207, 207, 207, 0.18) 37.636%,
    rgba(202, 202, 202, 0.14) 44.239%,
    rgba(200, 200, 200, 0.13) 50.409%,
    rgba(196, 196, 196, 0.1) 60.112%
  );
  /* 描边-线性渐变 */
  border-radius: 30px;
  border: 2px solid transparent;
  border-image: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.2),
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.2)
  );
  background-origin: border-box;
  background-clip: content-box, border-box;
  /* 阴影 */
  box-shadow: 0 1px 24px -1px rgba(0, 0, 0, 0.18);
}
</style>
