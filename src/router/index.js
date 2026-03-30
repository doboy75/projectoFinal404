import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
     
    component: ()=> import('../View/HomePrincipal.vue')
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
    path:'/produtos',
    name:'produto',
     component: () => import( '../View/ProdutosFasco.vue') 

  },
   {
    path:'/shopping',
    name:'shopping',
     component: () => import( '../View/ShoppingCart.vue') 

  }
  ,
   {
    path:'/shoppingcart2',
    name:'shopping2',
     component: () => import( '../View/ShoppingCart2.vue') 

  }
    ,
   {
    path:'/fashion',
    name:'fashion',
     component: () => import( '../View/FashionFAsco.vue') 

  }
      ,
   {
    path:'/checkout',
    name:'checkout',
     component: () => import( '../View/CheckoutPage.vue') 

  }
     ,
   {
    path:'/singup',
    name:'singup',
     component: () => import( '../components/SingupCreate.vue') 

  }


  




  

]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
