<script setup>
    import { useCounterStore } from '../stores/counter.js'

    const counter = useCounterStore()
</script>

<template>
    <p>Contador {{ counter.count }}</p>
</template>

