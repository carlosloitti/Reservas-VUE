import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Clientes from '@/views/Clientes.vue'
import Menus from '@/views/Menus.vue'
import Mesas from '@/views/Mesas.vue'
import Reservas from '@/views/Reservas.vue'
import Platos from '@/views/Platos.vue'
import EditarCliente from '../components/Cliente/EditarCliente.vue'
import NewCliente from '../components/Cliente/NewCliente.vue'
import EditarMenu from '../components/Menu/EditarMenu.vue'
import NewMenu from '../components/Menu/NewMenu.vue'
import EditarMesa from '../components/Mesa/EditarCliente.vue'
import NewMesa from '../components/Mesa/NewMesa.vue'
import EditarReserva from '../components/Reserva/EditarReserva.vue'
import NewReserva from '../components/Reserva/NewReserva.vue'
import EditarPlato from '../components/Plato/EditarPlato.vue'
import NewPlato from '../components/Plato/NewPlato.vue'



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
    path: '/reservas',
    name: 'Reservas',
    component: Reservas
  },

  {
    path: '/platos',
    name: 'Platos',
    component: Platos
  },



  {
    path: '/editar-cliente/:id',
    name: 'EditarCliente',
    component:  EditarCliente 
  },

  {
    path: '/add-cliente/',
    name: 'NewCliente',
    component:  NewCliente 
  },



  {
    path: '/editar-menu/:id',
    name: 'EditarMenu',
    component:  EditarMenu 
  },

  {
    path: '/add-menu/',
    name: 'NewMenu',
    component:  NewMenu 
  },




  {
    path: '/editar-mesa/:id',
    name: 'EditarMesas',
    component:  EditarMesa 
  },

  {
    path: '/add-mesa/',
    name: 'NewMesa',
    component:  NewMesa 
  },



  {
    path: '/editar-reserva/:id',
    name: 'EditarReserva',
    component:  EditarReserva 
  },

  {
    path: '/add-reserva/',
    name: 'NewReserva',
    component:  NewReserva 
  },


  {
    path: '/editar-plato/:id',
    name: 'EditarPlato',
    component:  EditarPlato 
  },

  {
    path: '/add-plato/',
    name: 'NewPlato',
    component:  NewPlato 
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
