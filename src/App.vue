<template>
  <BuscarDisponibles></BuscarDisponibles>
</template>

<script>
import BuscarDisponibles from './components/BuscarDisponibles.vue'

export default {
  name: 'App',
  components: {
    BuscarDisponibles,
    BuscarDisponibles
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
