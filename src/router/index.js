import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Dashboard from '../views/dashboard/dashboard.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
