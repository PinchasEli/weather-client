import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from './Interceptors/axiosInterceptors';

import App from './App.vue';
import router from './router';
import { environment } from './environment'

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$axios = axios;


app.use(pinia);
app.use(router);

app.mount('#app');
