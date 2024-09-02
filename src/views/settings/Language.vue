<template>
  <div>
    <div class="lang-title">
      {{ t('settings.menuList.Language') }}
    </div>

    <div class="lang-list">
      <div
        class="lang-item"
        :class="{ active: locale === item.value }"
        v-for="(item, index) in langList"
        :key="index"
        @click="changeLanguage(item.value)"
      >
        <div class="lang-item-icon">
          <span class="mgc_check_fill" v-show="locale === item.value"></span>
        </div>
        <div class="lang-item-name">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SettingLanguage'
})

import { useSettingsStore } from '@/stores/settings'

import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 语言列表
const langList = [
  {
    name: '中文',
    value: 'zh'
  },
  {
    name: 'English',
    value: 'en'
  }
]

// 切换语言
const settingsStore = useSettingsStore()
const changeLanguage = (lang: string) => {
  // 获取当前语言
  const currentLang = locale.value
  // 如果当前语言和要切换的语言相同，则不执行任何操作
  if (currentLang === lang) {
    return
  }
  // 切换语言
  // locale.value = lang
  settingsStore.language = lang
  // 保存设置
  settingsStore.saveSettings()
  // 刷新页面
  window.location.reload()
}
</script>

<style scoped lang="scss">
.lang-title {
  font-size: 20px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  width: 250px;
  margin: 20px auto;
}

.lang-list {
  // border: 1px solid red;

  .lang-item {
    // border: 1px solid yellow;
    width: 250px;
    height: 36px;
    border-radius: 12px;
    margin: 8px auto;
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.2s;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .lang-item-icon {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.active {
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
}
</style>
