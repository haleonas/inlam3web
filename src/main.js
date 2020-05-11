import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from './vuex/index'
import router from './router/index'

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
