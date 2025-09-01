import { createRouter, createWebHistory } from 'vue-router'

//Importamos las páginas
import AprendiendoSlots from '../pages/AprendiendoSlots.vue'
import AprendiendoVue from '../pages/AprendiendoVue.vue'
import NotFound from '../pages/NotFound.vue'
import StatePage from '../pages/StatePage.vue'
import Api from '../pages/Api.vue'

// Definimos las rutas
const routes = [
    { path: '/', component: AprendiendoVue, props: { msg: 'Vite + Vue' }},
    { path: '/slots', component: AprendiendoSlots },
    { path: '/pinia', component: StatePage },
    { path: '/api', component: Api },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router