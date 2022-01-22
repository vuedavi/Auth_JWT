import { createRouter, createWebHashHistory } from 'vue-router'
import Middleware from '../services/middleware'

import Login from '../views/Login'
import Feed from '../views/Feed'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed,
    beforeEnter: Middleware.Auth
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
