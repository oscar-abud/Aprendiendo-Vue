import { createRouter, createWebHistory } from 'vue-router'

//Importamos las páginas
import AprendiendoSlots from '../pages/AprendiendoSlots.vue'
import AprendiendoVue from '../pages/AprendiendoVue.vue'
import NotFound from '../pages/NotFound.vue'
import StatePage from '../pages/StatePage.vue'

const routes = [
    { path: '/', component: AprendiendoVue, props: { msg: 'Vite + Vue' }},
    { path: '/slots', component: AprendiendoSlots },
    { path: '/pinia', component: StatePage },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router