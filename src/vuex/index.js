import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
  setUsername(state, value){
    state.user = value
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
