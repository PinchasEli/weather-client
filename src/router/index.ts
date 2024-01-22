import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// import { createPinia } from 'pinia';
// import App from '../App.vue'
import { useUserStore } from '@/stores/user';

// const userStore = useUserStore();
// const pinia = createPinia();
// const userStore = useUserStore(pinia);

// const pinia = createPinia()
// const app = createApp(App)
// app.use(pinia)



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // beforeEnter: (to, from, next) => {
    //   userStore.user ? next() : next('/login');
    // },
    meta: {
      requiresAuth: true,
    },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/history',
    name: 'History',
    // beforeEnter: (to, from, next) => {
    //   userStore.user ? next() : next('/login');
    // },
    meta: {
      requiresAuth: true,
    },
    component: () => import('../views/HistoryView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/LoginView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  console.log('User State:', userStore.user);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is logged in
    console.log('userStore.user :>> ', userStore.user);
    if (!userStore.user) {
      // Redirect to login if not logged in
      next('/login');
    } else {
      // Allow access
      next();
    }
  } else {
    // For routes that do not require authentication
    next();
  }
});

export default router
