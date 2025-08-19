import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// 引入normalize初始化样式
import 'normalize.css'

// 引入阿里iconfont图标样式
import '@/assets/css/iconfont.css'
// 如果要使用symbol使用方式，则需要引入iconfont.js
import '@/assets/font/iconfont.js'

// 全局注册svg-icon组件
import SvgIcon from '@/components/SvgIcon.vue'
const app = createApp(App)
app.use(router)
app.component('svg-icon', SvgIcon)
app.mount('#app')
