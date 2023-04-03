import { createRouter, createWebHashHistory } from 'vue-router'
import LogIn from '../components/LogIn.vue'
import HelloComponent from '../components/HelloComponent.vue'
import SignUp from '../components/SignUp.vue'


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
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
  // Redirect
    {
        path: '/log-in',
        redirect: '/login'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router