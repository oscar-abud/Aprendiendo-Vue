import { defineStore } from 'pinia'
import { ref } from 'vue'

//Exportamos la funcion, que tendra el ref y las acciones que cambien el estado pero de manera global.
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    // Gettesr iran aqui

    // Acciones iran aqui
    return { count }
})

// Esto sirve como ejemplo cuando tenemos que hacer peticiones a una API