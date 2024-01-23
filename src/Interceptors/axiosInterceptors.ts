import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

import { useUserStore } from '../stores/user';

// Request interceptor for setting authorization headers
export const requestInterceptor = (config: any): any => {
  const userStore = useUserStore();
  if (userStore.user?.token && config) {
    config.headers = config.headers || {};
    config.headers.Authorization = `${userStore.user.token}`;
  }

  return config;
};


axios.interceptors.request.use(requestInterceptor);
console.log('This is interceptors!');

export default axios;
