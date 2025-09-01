// Importamos apolloCliente para hacer peticiones a GraphQL, InMemoryCache para cachear las respuestas. Esto nos ayuda a no hacer peticiones repetidas, y createHttpLink para definir el endpoint de la API GraphQL
// src/apollo.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'

// Endpoint de la API GraphQL
const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/'
})

// Creamos el cliente Apollo
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})