import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Main from './components/Main.vue'
import Holidays from './components/Holidays.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    someNumber: 5 // ta bort för att vad som ska sparas
  }
})

const router = new VueRouter({
  routes: [{
    path:'/',
    component: Main
  },
  {
    path: '/holidays',
    component: Holidays
  }]
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
