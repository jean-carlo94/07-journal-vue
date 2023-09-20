import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import daybookRouter from "../modules/daybook/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "AboutView" */ '@/views/AboutView.vue')
    },
    {
      path: '/daybook',
      ...daybookRouter,
    },
  ]
})

export default router
