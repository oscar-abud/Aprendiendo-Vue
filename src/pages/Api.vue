<script setup>
// Importamos useQuery para hacer consultas
import { useQuery } from '@vue/apollo-composable'
// Importamos gql para definir las consultas y asi tener resaltado de sintaxis
import { gql } from '@apollo/client/core'

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`

const { result, loading, error } = useQuery(GET_COUNTRIES) // Ejecutamos la consulta y obtenemos los datos, el estado de carga y los errores en ese orden
</script>

<template>
  <div>
    <h1>🌍 Lista de Países</h1>

    <div v-if="loading">Cargando...</div>
    <div v-if="error">Error: {{ error.message }}</div>

    <ul v-if="result">
      <li v-for="c in result.countries" :key="c.code">
        {{ c.emoji }} {{ c.name }} - {{ c.continent.name }}
      </li>
    </ul>
  </div>
</template>
