<template>
  <div class="screen">
    <!-- 路由占位符 -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheScreen'
})
</script>

<style scoped>
.screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-size: 16px;
}
</style>
