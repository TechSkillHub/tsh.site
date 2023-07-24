import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import interceptors from '@/helpers/interceptors'

// interceptors requests e responses
interceptors.request()
interceptors.response()

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
