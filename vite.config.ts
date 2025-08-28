import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// 导入unplugin-auto-import插件(vite形式)
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        AutoImport({
            imports: [
                'vue', // 自动导入 ref, reactive, computed 等
                'vue-router' // 自动导入 useRouter, useRoute 等
            ],
            dts: 'src/auto-imports.d.ts' // 自动生成类型声明文件
        })
    ],
    resolve: {
        // vite.config.ts 负责实际构建时的路径解析
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    base: './'
})
