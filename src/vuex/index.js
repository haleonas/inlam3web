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

const getters = {
  getCountries: state => {
    return state.countries
  },
  getUser: state => {
    return state.user
  }
}
  
let store = new Vuex.Store({
    state: {
        countries: [],
        user: ''
    },
    mutations,
    getters
})

export default store
