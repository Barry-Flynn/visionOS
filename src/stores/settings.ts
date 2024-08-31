import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  // 语言
  const language = ref('en')
  // 环境
  const environment = ref({
    name: 'Apartment (Daytime)',
    image: 'apartment-daytime.png',
    describe: 'Apartment during the day'
  })

  // 保存设置到本地
  function saveSettings() {
    localStorage.setItem(
      'settings',
      JSON.stringify({
        language: language.value,
        environment: environment.value
      })
    )
  }

  return { language, environment, saveSettings }
})
