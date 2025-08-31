<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)


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

// Importando el componente V-model
import VModel from './V-model.vue'
// Importando el componente V-bind
import VBind from './V-bind.vue'


</script>
<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button style='margin: 15px' type="button" @click="count++">count is {{ count }}</button> <br>
    <button @click="changeState()">
      {{ state ? 'Ocultar frutas' : 'Mostrar frutas' }}
    </button>
    <p> {{ state ? 'Frutas mostradas' : 'Frutas ocultas' }} </p>
  </div>
  <!-- Viendo el v-for -->
  <div class='card'>
    <h2>Lista de frutas</h2>
      <ul v-if='state && fruits.length > 0'>
        <li v-for="(fruit, index) in fruits" :key="index">
          Fruta: '{{ fruit }}', indice: '{{index}}'
          <button @click="deleteFruit(index)">eliminar</button>
        </li>
      </ul>
      <h3 v-else-if="!state">Las frutas estan ocultas</h3>
      <h3 v-else-if="fruits.length == 0">No hay frutas por mostrar</h3>
  </div>

  <!-- Viendo el v-bind -->
  <div class="card">
    <VBind />
  </div>

  <!-- probando v-model -->
  <div class="card">
    <VModel />
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}

li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-align: left;
  gap: 10px;
  margin: 7px 5px;
}

</style>
