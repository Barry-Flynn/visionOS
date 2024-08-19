import './assets/style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 导入 MingCute 图标库
import 'mingcute_icon/font/Mingcute.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
