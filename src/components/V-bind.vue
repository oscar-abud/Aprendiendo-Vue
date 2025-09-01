<script setup>
    import { ref } from 'vue'
    // State para v-bind
    const btn = ref(true)
</script>

<template>
    <h1>Boton de seguir o siguiendo</h1>
     <!-- El : es el v-bind: que permite dar una clase dinamica -->
    <button
      :class=" btn ? 'seguir' : 'siguiendo'"
      @click="btn = !btn"
    >
      {{btn ? 'Seguir' : 'Siguiendo'}}
    </button>
</template>

<style>
    .seguir{
        background-color: #053acd;
    }
</style>