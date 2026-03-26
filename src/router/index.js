import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    //component: HomeView
  },
  {
    path: '/deals',
    name: 'deals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   component: () => import( '../components/DealsMonth.vue') 
  },
  {
     path: '/SinginFasco',
    name: 'SinginFasco',
     component: () => import( '../View/SigninFasco.vue') 
  },
    {
     path: '/ForgetPassworld',
    name: 'ForgetPassworld',
     component: () => import( '../View/ForgetPassword.vue') 
  },
      {
     path: '/NewsArraivals',
    name: 'NewsArraivals',
     component: () => import( '../components/NewsArrivals.vue') 
  },
       {
     path: '/',
    name: 'Home',
     component: () => import( '../View/HomePrincipal.vue') 
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
