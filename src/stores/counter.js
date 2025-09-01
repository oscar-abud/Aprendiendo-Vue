import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

//Exportamos la funcion, que tendra el ref y las acciones que cambien el estado pero de manera global.
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    // Gettesr iran aqui
    const double = computed(() => count.value * 2)

    // Acciones iran aqui
    const increment = () => count.value++
    const decrement = () => count.value--

    // Retornamos lo que queremos que sea publico
    return { count, double, increment, decrement }
})

// Esto sirve como ejemplo cuando tenemos que hacer peticiones a una API