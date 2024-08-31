<template>
  <!-- <button class="button" type="button"> -->
  <button
    type="button"
    :class="[
      'button',
      props.bg ? 'is-has-bg' : '',
      props.disabled ? 'is-disabled' : '',
      props.size === 'large' ? 'is-large' : '',
      props.size === 'huge' ? 'is-huge' : ''
    ]"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <span class="button-icon" v-if="props.icon" :class="'mgc_' + props.icon"></span>
    <!-- 当按钮中存在内容时才显示 -->
    <span class="button-text" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheButton'
})

// 接收参数
const props = defineProps<{
  // 按钮图标名称
  icon?: string
  // 是否设置背景色，如果是，按钮会被添加 is-has-bg 类
  bg?: boolean
  // 是否禁用按钮
  disabled?: boolean
  // 尺寸
  size?: 'large' | 'huge'
}>()

// 按钮点击事件
const handleClick = () => {
  if (props.disabled) return
  // console.log('click')
}
</script>

<style scoped lang="scss">
.button {
  // 尺寸
  // width: 28px;
  height: 28px;
  padding: 0 7px;
  // 边框
  border: none;
  border-radius: 14px;
  // 背景
  background-color: transparent;
  // 字体
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
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

  .button-icon + .button-text {
    margin-left: 4px;
  }

  .button-text {
    // 不换行
    white-space: nowrap;
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

// 按钮尺寸
.is-large {
  height: 34px;
  padding: 0 9px;
  border-radius: 17px;

  .button-icon {
    font-size: 16px;
  }

  .button-icon + .button-text {
    margin-left: 6px;
  }
}
.is-huge {
  height: 40px;
  padding: 0 10px;
  border-radius: 20px;

  .button-icon {
    font-size: 20px;
  }

  .button-icon + .button-text {
    margin-left: 8px;
  }
}
</style>
