import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

//Importamos el router
import router from './router/index.js'

const app = createApp(App)

// Usando Pinia
app.use(createPinia())

// Usando el router
app.use(router)

app.mount('#app')