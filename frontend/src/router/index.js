import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Header from '../components/Header.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
