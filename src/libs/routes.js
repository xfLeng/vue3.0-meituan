import { 
    createRouter, 
    createWebHistory,
} from 'vue-router'

const routes = [];
const importRoutes = import.meta.globEager('../views/**/routes.js');
Object.values(importRoutes).forEach((module) => {
  routes.push(...module.default);
});

// routes.push({
//   path: '/:catchAll(.*)',
//   name: '404',
//   component: import('@/components/404/index.vue'),
// });

export default createRouter({
  history: createWebHistory(),
  routes,
});
