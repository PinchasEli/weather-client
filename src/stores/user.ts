import { defineStore } from 'pinia';
import axios from '../Interceptors/axiosInterceptors';

import { environment } from '@/environment';
import type { User } from '@/models/user.interface';


const BASE_URL = environment.BASE_URL || '';

export const useUserStore = defineStore('user', {
    state: () => ({
      user: null as User | null,
    }),
    getters: {
      isAuthenticated: (state) => !!state.user,
    },
    actions: {
        init() {
            if (this.user) {
              return;
            }

            const storedUser = localStorage.getItem('user');
            if (storedUser) {
              this.setUser(JSON.parse(storedUser));
            }
        },
        setUser(user: User | null) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
        },
        async login(data: any) {
            try {
              const response = await axios.post(`${BASE_URL}/accounts/auth`, data);

              const responseData = response.data.data;
              this.setUser({ 
                token: responseData.token, 
                username: responseData.user.username
              });

              console.log('Login successful');
            } catch (error: any) {
              console.error('Login failed:', error.message);
            }
        },
    }
});
