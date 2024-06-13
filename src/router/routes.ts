import HomeView from '../views/HomeView.vue'
import TablesView from '@/views/TablesView.vue'
import CardsView from '@/views/CardsView.vue'
import BentoView from '@/views/BentoView.vue'
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
  },
  {
    path: '/cards',
    name: 'cards',
    component: CardsView,
    meta: {
      navbar: true
    }
  },
  {
    path: '/bento',
    name: 'bento',
    component: BentoView,
    meta: {
      navbar: true
    }
  }
]
