import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import {
    renderWithQiankun,
    qiankunWindow,
    QiankunProps,
  } from 'vite-plugin-qiankun/dist/helper'

// createApp(App).mount('#app')
const render = (props = {}) => {
    const { container } = props
    const app = container?.querySelector('#app') || '#app' // 避免 id 重复导致微应用挂载失败
    createApp(App).mount(app)
  }
   
  const initQianKun = () => {
    renderWithQiankun({
      bootstrap() {
        console.log('微应用：bootstrap')
      },
      mount(props) {
        // 获取主应用传入数据
        console.log('微应用：mount', props)
        const {token } = props
        sessionStorage.setItem('vue3Token', token)
        render(props)

      },
      unmount(props) {
        console.log('微应用：unmount', props)
      },
      update(props) {
        console.log('微应用：update', props)
      },
    })
  }
   
  qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render() // 判断是否使用 qiankun ，保证项目可以独立运行