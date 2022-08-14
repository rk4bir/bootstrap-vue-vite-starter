import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const PUBLIC_PATHS = ['/login']
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router