import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Psy from '../views/Psy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/psy',
    name: 'Psy',
    component: Psy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
