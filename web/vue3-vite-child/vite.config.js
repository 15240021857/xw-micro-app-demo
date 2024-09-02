import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import qiankun from 'vite-plugin-qiankun'


// https://vitejs.dev/config/
export default defineConfig({
  base: 'vue3App',
  plugins: [
    vue(), 
    qiankun('vue3App', { // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true,
    }),
],
  server: {
    port: 8082,
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    },
    origin: 'http://localhost:8082'
  },
  build: {
    rollupOptions: {
      output: {
        format: 'umd'
      }
    }
  }
})
