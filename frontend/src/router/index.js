import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Catalogue from '../views/Catalogue.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: Catalogue
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
