// router.js
import { createRouter, createWebHistory } from 'vue-router';

import Contact from './components/Contact.vue';
import About from './components/About.vue';

const routes = [
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
