import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Holidays from '../views/Holidays.vue'

Vue.use(VueRouter)

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

  export default router