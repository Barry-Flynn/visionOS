<template>
  <div class="input">
    <span class="input-icon mgc_mic_fill"></span>
    <input type="text" :placeholder="props.placeholder" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheInput'
})

// 接收参数
const props = defineProps<{
  placeholder?: string
}>()
</script>

<style scoped lang="scss">
.input {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  // 内阴影
  box-shadow: inset 0 1px 10px -1px rgba(0, 0, 0, 0.3);
  // 布局
  display: flex;
  align-items: center;

  .input-icon {
    margin: 6px;
    color: rgba(255, 255, 255, 0.4);
  }

  input {
    // 尺寸
    width: 100%;
    height: 28px;
    background-color: transparent;
    border: none;
    // 内边距
    padding-right: 10px;
    // 字体
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
