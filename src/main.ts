import { createApp } from 'vue'
import './assets/css/main.css'
import router from './router'
import App from './App.vue'
import authLayout from './layout/authLayout.vue'


const app = createApp(App)
app.use(router).mount('#app')
app.component('auth-layout', authLayout)