<template>
  <div class="occupying-element"></div>
  <div class="ornaments glass-material">Ornaments</div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheOrnaments'
})
</script>

<style scoped lang="scss">
.occupying-element {
  width: 100%;
  height: 34px;
}
.ornaments {
  // 尺寸
  width: 250px;
  height: 50px;
  // 定位
  // position: absolute;
  // top: 0;
  // left: 50%;
  // transform: translate(-50%, -16px);
  // 定位，高度变化时，底边位置不变
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -20px);

  // 背景模糊，用于覆盖glass-material部分属性，从而获得更好效果
  backdrop-filter: blur(8px);
  // 自动布局
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4px 8px;
  // 禁止鼠标选中
  user-select: none;
}
</style>
