import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Expertise from '../views/Expertise.vue'
import History from '../views/History.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/expertise',
      name: 'Expertise',
      component: Expertise
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router 