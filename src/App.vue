<template>
  <div id="app">
    <h1>Main</h1>
    <Links></links>
    <router-view></router-view>
    <Main></Main>
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
