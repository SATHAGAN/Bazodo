import { createRouter, createWebHistory } from 'vue-router'
 import HomeView from '../components/HomeView.vue'
 import ContactUs from '../components/ContactUs.vue'
 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/AboutUs.vue'),
    },
    {
      path: '/Contactus',
      name: 'Contact',
      component: ContactUs,
    },

  ],
})

export default router
