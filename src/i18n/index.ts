// https://vue-i18n.intlify.dev/
import { createI18n } from 'vue-i18n'
import en from './en.json'
import zh from './zh.json'

const messages = {
  en,
  zh
}

// 获取语言
export function getLanguage() {
  // 判断是否存在本地设置
  if (localStorage.getItem('settings')) {
    const settings = JSON.parse(localStorage.getItem('settings') as string)
    return settings.language
  }
  // 获取浏览器语言
  const language = navigator.language.toLowerCase()
  // 获取 messages 的所有 key
  const locales = Object.keys(messages)
  // 遍历所有 key，判断是否包含当前语言
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}

// 创建i18n实例
const i18n = createI18n({
  legacy: false,
  locale: getLanguage(),
  fallbackLocale: 'en',
  messages: messages
})

export default i18n
