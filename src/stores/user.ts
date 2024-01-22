import { defineStore } from 'pinia';
import axios from 'axios';

import { environment } from '@/environment';

const $axios = axios.create({
  baseURL: environment.BASE_URL,
});

interface User {
    username: string;
    // password: string;
    token?: string;
}

export const useUserStore = defineStore('user', {
    state: () => ({
      user: null as User | null,
    }),
    actions: {
        init() {
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
        isAuthenticated() {
            return !!this.user;
        },
        async login(data: any) {
            // try {
              // Make a POST request to the login endpoint
              const response = await $axios.post('/accounts/auth', data);
      
              // Get the token from the response
            //   const token = response.data.token;
              const responseData = response.data.data;
              console.log('response.data :>> ', responseData);
              console.log('response.data :>> ', typeof(responseData));
              console.log('response.data :>> ', responseData.token);
              console.log('response.data :>> ', responseData.user);
              // Use AuthService to login
              this.setUser({ 
                token: responseData.token, 
                username: responseData.user.username
              });
      
              // Redirect to a protected route or perform other actions
              console.log('Login successful');
            // } catch (error: any) {
            //   console.error('Login failed:', error.message);
            // }
        },
    }
});
