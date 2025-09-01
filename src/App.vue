<script setup>
</script>

<template>
  <nav>
    <router-link to="/">Inicio</router-link>
    <router-link to="/slots">Página 2</router-link>
  </nav>

  <!-- Aquí se renderiza la página según la ruta -->
  <router-view />
</template>

<style scoped>
  nav {
    display: flex;
    gap: 1rem;          /* separa los links */
    background-color: #333;
    padding: 1rem;
  }

  .link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background 0.3s;
  }

  .link:hover {
    background-color: #555;
  }
</style>