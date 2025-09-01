import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import { apolloClient } from './apollo.js'

import './style.css'

const app = createApp({
  setup() {
    // Inyectamos el cliente Apollo globalmente
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(createPinia())
app.use(router)
app.mount('#app')