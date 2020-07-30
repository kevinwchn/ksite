import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Psy from '../views/Psy.vue'
import Conan from '../views/Conan.vue'
import ChatRoom from '../views/ChatRoom.vue'

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
  },
  {
    path: '/conan',
    name: 'Conan',
    component: Conan
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatRoom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
