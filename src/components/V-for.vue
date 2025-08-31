<script setup>
    import { ref } from 'vue'
    // Lista de frutas
    const fruits = ref(['manzana', 'pera', 'uva', 'banana', 'kiwi'])
    // Metodo para eliminar la fruta
    const deleteFruit = (index) => {
        fruits.value.splice(index, 1)
        // otra forma de hacerlo
        // fruits.value = fruits.value.filter((_, i) => i !== index)
    }
    // Estado para mostrar u ocultar las frutas
    const state = ref(true)
    // Metodo para cambiar el valor de state
    const changeState= () => {
        if (fruits.value.length > 0) {
            state.value = !state.value
        }
    }
</script>

<template>
    <button @click="changeState()">
      {{ state ? 'Ocultar frutas' : 'Mostrar frutas' }}
    </button>
    <p> {{ state ? 'Frutas mostradas' : 'Frutas ocultas' }} </p>
    <h2>Lista de frutas</h2>
      <ul v-if='state && fruits.length > 0'>
        <li v-for="(fruit, index) in fruits" :key="index">
          Fruta: '{{ fruit }}', indice: '{{index}}'
          <button @click="deleteFruit(index)">eliminar</button>
        </li>
      </ul>
      <h3 v-else-if="!state">Las frutas estan ocultas</h3>
      <h3 v-else-if="fruits.length == 0">No hay frutas por mostrar</h3>
</template>

<style>
    li{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        text-align: left;
        gap: 10px;
        margin: 7px 5px;
    }
</style>