import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// 引入normalize初始化样式
import 'normalize.css'
const app = createApp(App)
app.use(router)
app.mount('#app')
