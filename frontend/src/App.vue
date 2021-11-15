<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/icon-above-font.svg">
    <HelloWorld msg="Bienvenue sur votre reseau d'entreprise"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
.logo {
height:10rem;
}
</style>
