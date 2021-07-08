import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// import '@/theme.scss'

createApp(App).use(store).use(router).mount('#app')

console.log('Customer Page', process.env, process)