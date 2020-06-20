import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Contact from '../views/Contact.vue'
import RecipeFinder from '../views/RecipeFinder.vue'
import Smoothie from '../views/Smoothie.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/recipefinder',
        name: 'RecipeFinder',
        component: RecipeFinder
    },
    {
        path: '/smoothie',
        name: 'Smoothie',
        component: Smoothie
    }
]

const router = new VueRouter({
  
    routes
})

export default router
