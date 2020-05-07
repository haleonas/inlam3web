<template>
  <div id="app">
    <h1>Header</h1>
    <Links></links>
    <router-view :some-value-to-pass="this.$store.state.user"></router-view>
  </div>
</template>

<script>
import Links from './components/Links'
export default {
  name: 'App',
  components: {
    Links
  }
}
</script>

<style>
h1 {
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 20px;
}
</style>
