<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

// Importando el componente V-model
import VModel from './V-model.vue'
// Importando el componente V-bind
import VBind from './V-bind.vue'
// Importando el componente V-for
import VFor from './V-for.vue'

</script>
<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    
  </div>
  <!-- Viendo el v-for -->
  <div class='card'>
    <VFor />
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

</style>
