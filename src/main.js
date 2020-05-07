import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Main from './views/Main.vue'
import Holidays from './views/Holidays.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const mutations = {
  setUsername(state, value){
    state.user = value
  }
}

const store = new Vuex.Store({
  state: {
    countries: [],
    user: ''
  },
  mutations
})

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path:'/',
    component: Main
  },
  {
    path: '/holidays',
    component: Holidays
    
  },
  {
    path: '/holidays/:slug',
    component: Holidays,
    props: true
  }
  ]
})

new Vue({
  render: h => h(App),
  router,
  store,
  beforeMount(){
    this.getCountries()
  },
  methods:{
    async getCountries(){
      const data = await fetch('https://restcountries.eu/rest/v2/all')
      const countries = await data.json()
      for(const country of countries){
        this.$store.state.countries.push({country:country.name, shortName: country.alpha2Code})
      }
    }
  }
}).$mount('#app')
