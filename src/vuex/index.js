import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
  setUsername(state, value){
    state.user = value
  },
  addCountry(state,country){
    state.countries.push(country)
  }
}
  
let store = new Vuex.Store({
    state: {
        countries: [],
        user: ''
    },
    mutations
})

export default store
