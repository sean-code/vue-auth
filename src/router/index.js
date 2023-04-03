import { createRouter, createWebHashHistory } from 'vue-router'
import LogIn from '../components/LogIn.vue'
import HelloComponent from '../components/HelloComponent.vue'

const routes = [
    {
        path: '/',
        name: 'HelloComponent',
        component: HelloComponent
    },
  {
    path: '/login',
    name: 'logIn',
    component: LogIn
  },
  // Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router