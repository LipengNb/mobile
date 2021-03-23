import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/')
      },
      {
        path: '/like',
        name: 'Like',
        component: () => import('@/views/like/')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
