<template>
  <div id="links">
        <router-link to="/">Home</router-link>
        <router-link to="/holidays">Holidays</router-link>
  </div>
</template>

<script>
export default {
    name: "Links"
}
</script>

<style>
#links{
    display:flex;
    
    justify-content: space-evenly;
    font-size: 2em;
    
}
</style>