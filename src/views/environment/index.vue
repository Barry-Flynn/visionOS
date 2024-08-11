<template>
  <div class="environment">
    <img src="@/assets/images/environment/home-daytime.png" alt="environment" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheEnvironment'
})
</script>

<style scoped>
img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>
