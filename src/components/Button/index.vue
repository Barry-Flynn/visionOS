<template>
  <!-- <button class="button" type="button"> -->
  <button
    type="button"
    :class="['button', props.bg ? 'is-has-bg' : '', props.disabled ? 'is-disabled' : '']"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <span v-if="props.icon" :class="'mgc_' + props.icon"></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheButton'
})

// 接收参数
const props = defineProps<{
  icon?: string // 按钮图标名称
  bg?: boolean // 是否设置背景色，如果是，按钮会被添加 is-has-bg 类
  disabled?: boolean // 是否禁用按钮
}>()

// 按钮点击事件
const handleClick = () => {
  if (props.disabled) return
  console.log('click')
}
</script>

<style scoped lang="scss">
.button {
  // 尺寸
  width: 28px;
  height: 28px;
  // 边框
  border: none;
  border-radius: 50%;
  // 背景
  background-color: transparent;
  // 字体
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  // 布局
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.9);
    color: rgba(0, 0, 0, 0.8);
  }
}

// 设置背景色
.is-has-bg {
  background-color: rgba(255, 255, 255, 0.3);
}

// 禁用按钮
.is-disabled {
  cursor: not-allowed;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.2);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.2);
  }
}
</style>
