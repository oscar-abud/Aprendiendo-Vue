<script setup>
    import { ref } from 'vue'
    // State para v-model
    const name = ref('')
</script>

<template>
    <h2>Probando v-model</h2>
    <!-- name se estara actualizando en tiempo real bidireccionalmente -->
    <h2>{{ name == '' ? 'Escribe en el input' : 'Hola, '+ name}}</h2>
    <input v-model.trim="name" placeholder="Escribe algo"/>
</template>

<style scoped>
    input{
        padding: 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 16px;
    }
</style>