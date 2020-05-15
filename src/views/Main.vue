<template>
    <div id="main">
       <p><label :value="userValue" for="userInput">Username:{{this.$store.getters.getUser}}</label></p>
       <input v-model="userValue" id="userInput">
    </div>
</template>

<script>

export default {
    name:"Main",
    computed:{
        userValue:{ 
            get(){
               return this.$store.getters.getUser
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