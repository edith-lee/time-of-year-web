/*
 * @Author: edith Edith_luckend@163.com
 * @Date: 2022-12-08 23:28:07
 * @LastEditors: edith Edith_luckend@163.com
 * @LastEditTime: 2022-12-10 16:56:27
 * @FilePath: \time-of-year-web\src\router\index.ts
 * @Description: routers
 * Copyright (c) 2022 by edith Edith_luckend@163.com, All Rights Reserved.
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/MainView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
