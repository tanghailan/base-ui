import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../layouts/Home.vue'),
    children:[
      {
        path : '',
        name: 'Index',
        component: () => import('../views/Index')
      },
      {
        path : 'login',
        name: 'Login',
        component: () => import('../views/Login')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
