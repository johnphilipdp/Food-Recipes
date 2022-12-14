import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

import * as VueRouter from 'vue-router';

import Foods from './components/Foods'
import Food from './components/Food'
import FoodEdit from './components/FoodEdit'
import FoodAdd from './components/FoodAdd'

const routes = [
  { path: '/', component: Foods },
  { path: '/:id', component: Food, props: true },
  { path: '/edit/:id', component: FoodEdit, props: true },
  { path: '/add', component: FoodAdd }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})


createApp(App).use(router).mount('#app')
