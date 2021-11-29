import { 
    createRouter, 
    createWebHistory,
    RouteRecordRaw
} from 'vue-router'

interface IModule {
    default: Array<RouteRecordRaw>
}

const routes: Array<RouteRecordRaw> = [];
const importRoutes = (<any>(import.meta)).globEager('../views/**/routes.js');
Object.values(importRoutes).forEach((module) => {
    routes.push(...(<IModule>module).default);
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
