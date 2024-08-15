<template>
  <div class="container">
    <!-- 默认插槽 -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheContainer'
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
}
</style>
