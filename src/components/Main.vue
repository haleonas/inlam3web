<template>
    <div id="main">
       <p><label :value="this.$store.state.user" for="userInput">Username:{{this.$store.state.user}}</label></p>
       <input v-model="userValue" id="userInput">
    </div>
</template>

<script>

export default {
    name:"Main",
    computed:{
        userValue:{ 
            get(){
                return this.$store.state.user
            },
            set(value){
                this.$store.commit('setUsername',value)
            }
        }
    },
    beforeMount(){
        this.setTitle()
    },
    methods:{
        setTitle(){
        document.title = 'Main'
    }
  }
}
</script>

<style>

</style>