import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useUserStore } from '@/stores/user';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      requiresAuth: true,
    },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: {
      requiresAuth: true,
    },
    component: () => import('../views/HistoryView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!userStore.user) {
      next('/login');
    } else {
      next();
    }
  } else {
    // For routes that do not require authentication
    next();
  }
});

export default router
