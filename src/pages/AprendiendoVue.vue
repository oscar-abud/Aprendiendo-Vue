<script setup>

  defineProps({
    msg: String,
  })

  // Importando el componente V-model
  import VModel from '../components/V-model.vue'
  // Importando el componente V-bind
  import VBind from '../components/V-bind.vue'
  // Importando el componente V-for
  import VFor from '../components/V-for.vue'

  import { useCounterStore } from '../stores/counter.js'
  const counter = useCounterStore()

</script>
<template>

  <div class="logo-container">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <h1>{{ msg }}</h1>

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
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
