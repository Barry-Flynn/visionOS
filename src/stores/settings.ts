import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  // 状态
  const environment = ref({
    name: 'Apartment (Daytime)',
    image: 'apartment-daytime.png',
    describe: 'Apartment during the day'
  })

  return { environment }
})
