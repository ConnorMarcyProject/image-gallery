<template>
  <div id="app">
    <main>
      <Header/>
      <br><RouterView></RouterView><br>
    </main>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  padding: 10px; 
}
</style>
