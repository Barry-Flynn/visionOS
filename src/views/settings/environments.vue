<template>
  <div class="environment hide-scrollbar">
    <div
      v-for="(item, index) in environments"
      :key="index"
      class="environment-preview-card"
      :class="{ active: settingsStore.environment.name === item.name }"
      @click="changeEnvironment(item)"
    >
      <div class="environment-image">
        <img :src="getImageUrl(item.image)" alt="Environment Image" />
      </div>
      <div class="environment-name ellipsis">{{ item.name }}</div>
      <div class="environment-describe ellipsis">{{ item.describe }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SettingEnvironment'
})

import { useSettingsStore } from '@/stores/settings'

type environment = {
  name: string
  image: string
  describe: string
}

// 环境列表
const environments: environment[] = [
  {
    name: 'Apartment (Daytime)',
    image: 'apartment-daytime.png',
    describe: 'Apartment during the day'
  },
  {
    name: 'Apartment (Night)',
    image: 'apartment-night.png',
    describe: 'Apartment at night'
  }
]

// 获取图片地址
const getImageUrl = (image: string) => {
  return new URL(`../../assets/images/environment/${image}`, import.meta.url).href
}

// 修改环境
const settingsStore = useSettingsStore()
const changeEnvironment = (environment: environment) => {
  // console.log(environment)
  settingsStore.environment = environment
  // 保存设置
  settingsStore.saveSettings()
}
</script>

<style scoped lang="scss">
.environment {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 16px;
  max-height: 500px;

  .environment-preview-card {
    // border: 1px solid red;
    border: 2px solid rgba(255, 255, 255, 0.4);
    width: 300px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    overflow: hidden;

    .environment-image {
      width: 280px;
      height: 160px;
      margin: 10px 10px 0 10px;
      border-radius: 20px;
      overflow: hidden;
      // 禁止选中
      user-select: none;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .environment-name {
      color: rgba(255, 255, 255, 0.9);
      font-size: 16px;
      line-height: 30px;
      padding: 0 10px;
      font-weight: bold;
      // 禁止选中
      user-select: none;
    }
    .environment-describe {
      color: rgba(255, 255, 255, 0.9);
      font-size: 14px;
      line-height: 30px;
      padding: 0 10px;
      // 禁止选中
      user-select: none;
    }

    &.active {
      border: 2px solid rgba(73, 33, 255, 0.6);

      .environment-name,
      .environment-describe {
        color: rgba(73, 33, 255, 0.9);
      }
    }
  }
}
</style>
