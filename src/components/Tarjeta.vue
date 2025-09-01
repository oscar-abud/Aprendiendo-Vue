<template>
  <div class="tarjeta">
    <!-- Slot para el header -->
    <header><slot name="header">{{ titulo }}</slot></header>

    <!-- Contenido principal del slot por defecto -->
    <main><slot>Contenido por defecto de la tarjeta</slot></main>

    <!-- Botón que emite evento al padre -->
    <footer>
      <button @click="handleClick">{{ btnTexto }}</button>
    </footer>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  titulo: { type: String, default: 'Título Tarjeta' },
  btnTexto: { type: String, default: 'Click' }
})

const emit = defineEmits(['click'])

function handleClick() {
  emit('click', 'Tarjeta clickeada!')
}
</script>

<style scoped>
.tarjeta {
  border: 2px solid #42b983;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
}
button {
  background-color: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
