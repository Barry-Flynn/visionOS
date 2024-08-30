import './assets/style/main.scss'

import { createApp } from 'vue'

// 导入 MingCute 图标库
import 'mingcute_icon/font/Mingcute.css'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
