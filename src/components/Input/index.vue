<template>
  <div
    :class="['input', props.round ? 'is-round' : '', props.size === 'large' ? 'is-large' : '']"
    :style="{ width: props.width + 'px' }"
  >
    <!-- 前缀插槽 -->
    <slot name="prefix"></slot>

    <div class="input-inner">
      <span :class="['input-icon', props.icon ? 'mgc_' + props.icon : '']"></span>
      <input
        type="text"
        :placeholder="props.placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :class="[props.center ? 'is-center' : '']"
      />
    </div>

    <!-- 后缀插槽 -->
    <slot name="suffix"></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheInput'
})

// 接收参数
const props = defineProps<{
  // 占位符
  placeholder?: string
  // 宽度
  width?: number
  // 是否圆角
  round?: boolean
  // 尺寸
  size?: 'large'
  // 双向绑定值
  modelValue?: string
  // 输入框图标
  icon?: string
  // 是否居中
  center?: boolean
}>()
// 接收事件
const emit = defineEmits(['update:modelValue'])
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
  justify-content: space-between;

  .input-inner {
    // 布局
    display: flex;
    align-items: center;
    vertical-align: middle;
    // 可放大
    flex: 1;

    .input-icon {
      font-size: 14px;
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
      color: rgba(255, 255, 255, 0.9);

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }

      &.is-center {
        text-align: center;
      }
    }
  }

  &.is-round {
    border-radius: 14px;
  }
}

.is-large {
  .input-inner {
    .input-icon {
      font-size: 16px;
    }

    input {
      height: 34px;
      font-size: 14px;
    }
  }

  &.is-round {
    border-radius: 17px;
  }
}
</style>
