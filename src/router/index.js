import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/layout/home',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: '/layout/area',
        name: 'area',
        component: () => import('@/views/Area')
      },
      {
        path: '/layout/house',
        name: 'house',
        component: () => import('@/views/House')
      },
      {
        path: '/layout/user',
        name: 'user',
        component: () => import('@/views/User')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
