import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://192.168.186.83:6432',
    //       changeOrigin: true,
    //       rewrite: path => path.replace(/^\/api/, '')
    //     },
    //   }
    // },
    resolve: {
        alias: {
            '@': '/src', // 这里的@符号表示你的src目录，你可以根据项目实际情况修改
        },
    },
})
