<script setup>
    import Tarjeta from '../components/Tarjeta.vue'
    function tarjetaClick(mensaje) {
        alert(mensaje)
    }
</script>

<template>
  <h1>Ejemplo Slots + Props + Emits</h1>

  <!-- Usando slots y props -->
  <Tarjeta titulo="Mi Primera Tarjeta" btnTexto="Presióname" @click="tarjetaClick">
    <template #header>
      <h2>Header personalizado</h2>
    </template>
    <p>Este es el contenido principal de la tarjeta.</p>
  </Tarjeta>

  <!-- Tarjeta usando contenido por defecto -->
  <Tarjeta @click="tarjetaClick" />
</template>
