<template>
  <div class="environment">
    <img src="@/assets/images/environment/apartment-daytime.png" alt="environment" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheEnvironment'
})
</script>

<style scoped lang="scss">
.environment {
  // 禁止选中
  user-select: none;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
}
</style>
