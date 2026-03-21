import { createRouter, createWebHashHistory } from 'vue-router'

import HugoBoss from '../components/HugoBoss.vue'

const routes = [
  {
    path: '/',
    name: 'HugoBoss',
    component: HugoBoss
  },
  {
    path: '/deals',
    name: 'deals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   component: () => import( '../components/DealsMonth.vue') 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
