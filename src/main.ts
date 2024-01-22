import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import { environment } from './environment'

const app = createApp(App);
const pinia = createPinia();
const $axios = axios.create({
    baseURL: environment.BASE_URL,
});
app.config.globalProperties.$axios = $axios;


app.use(pinia);
app.use(router);

// Add a global interceptor to attach the JWT to each request
app.config.globalProperties.$axios.interceptors.request.use((config: any) => {
    const user = JSON.parse(localStorage.getItem('user') || '');
    if (user?.token) {
      config.headers.Authorization = `${user.token}`;
    }
    return config;
});


app.mount('#app');
