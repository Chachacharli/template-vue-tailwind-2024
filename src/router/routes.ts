import HomeView from '../views/HomeView.vue'
import TablesView from '@/views/TablesView.vue'
// import type { RouteRecordRaw } from 'vue-router'

export const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'base',
    meta: {
      navbar: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      navbar: true
    }
  },
  {
    path: '/tables',
    name: 'tables',
    component: TablesView,
    meta: {
      navbar: true
    }
  }
]
