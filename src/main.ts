import { createApp } from 'vue'
import './assets/css/main.css'
import router from './router'
import App from './App.vue'
import authLayout from './layout/authLayout.vue'
import onboardingLayout from './layout/onboardingLayout.vue'
import { refreshToken } from './composables/UserController'
import { useUtils } from './composables/Utils'
import './firebase/index'


const { checkInactivity } = useUtils()

// refreshToken()
checkInactivity()


const app = createApp(App)
app.use(router).mount('#app')
app.component('auth-layout', authLayout)
app.component('onboarding-layout', onboardingLayout)