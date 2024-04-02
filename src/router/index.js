import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: () => import('../views/Mi.vue')
    },
    {
      path: '/lines',
      name: 'lines',
      component: () => import('../views/DrawLines.vue')
    },
    {
      path: '/mimodel',
      name: 'mimodel',
      component: () => import('../views/MiModel.vue')
    },
    {
      path: '/lines',
      name: 'lines',
      component: () => import('../views/DrawLines.vue')
    },
    {
      path: '/lines',
      name: 'lines',
      component: () => import('../views/DrawLines.vue')
    },
  ]
})

export default router
