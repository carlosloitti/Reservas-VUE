import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Clientes from '@/views/Clientes.vue'
import Menus from '@/views/Menus.vue'
import Mesas from '@/views/Mesas.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },


  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },

  {
    path: '/menus',
    name: 'Menus',
    component: Menus
  },

  {
    path: '/mesas',
    name: 'Mesas',
    component: Mesas
  },



  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
