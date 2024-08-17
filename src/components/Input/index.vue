<template>
  <div class="input">
    <input type="text" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheInput'
})
</script>

<style scoped lang="scss">
.input {
  input {
    // 尺寸
    width: 100%;
    height: 24px;
    // 边框
    border: none;
    border-radius: 4px;
    // 内边距
    padding: 0 10px;
    // 背景
    background-color: rgba(0, 0, 0, 0.2);
    // 内阴影
    box-shadow: inset 0 1px 10px -1px rgba(0, 0, 0, 0.3);
    // 字体
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }
}
</style>
