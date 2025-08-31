<script setup>
    import { ref } from 'vue'
    // State para v-model
    const name = ref('')
</script>

<template>
    <h2>Probando v-model</h2>
    <!-- name se estara actualizando en tiempo real bidireccionalmente -->
    <input v-model.trim="name" placeholder="Escribe algo"/>
    <p>{{ name == '' ? 'Escribe en el input' : 'Hola, '+ name}}</p>
</template>