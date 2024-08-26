<template>
  <div class="environment">
    <img :src="getImageUrl(settingsStore.environment.image)" alt="environment" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheEnvironment'
})

import { useSettingsStore } from '@/stores/settings'

// 获取图片地址
const getImageUrl = (image: string) => {
  return new URL(`../../assets/images/environment/${image}`, import.meta.url).href
}

const settingsStore = useSettingsStore()

// watchEffect(() => {
//   const { daytime } = settingsStore
//   const environment = document.querySelector('.environment') as HTMLDivElement
//   environment.style.backgroundImage = `url(${daytime ? '@/assets/images/environment/apartment-daytime.png' : '@/assets/images/environment/apartment-nighttime.png'})`
// })
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
