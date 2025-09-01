<script setup>
    import { useCounterStore } from '../stores/counter.js'

    const counter = useCounterStore()
</script>

<template>
    <p>Contador {{ counter.count }}</p>
    <p>El doble {{ counter.double }}</p>
    <button @click="counter.decrement">Restar</button>
    <button @click="counter.increment">Sumar</button>
</template>

<style scoped>
    button{
        margin: 20px;
    }
</style>
