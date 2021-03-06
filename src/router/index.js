import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import navBar from '../views/navBarView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },{
    path: '/proyectos',
    name: 'proyectos',
    component: () => import('../views/Proyects.vue')
  },{
    path: '/curriculum',
    name: 'curriculum',
    component: () => import('../views/ViewPDF.vue')
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
