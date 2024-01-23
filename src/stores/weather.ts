import { defineStore } from 'pinia'

import axios from '../Interceptors/axiosInterceptors';

import { environment } from '@/environment';


const BASE_URL = environment.BASE_URL || '';


export const useWeatherStore = defineStore('weather', {
    // state: () => ({
    // }),
    actions: {
        async getWeather(city: String) {
          try {
            const params = { city };
            const response = await axios.get(`${BASE_URL}/weather`, { params });

            if (response.data.status !== "success") {
              throw 'Wrong city'; 
            }

            const responseData = response.data.data;
            console.log('responseData :>> ', responseData);

            console.log('search successful');
            return responseData;
          } catch (error: any) {
            console.error('search failed:', error.message);
            return { error: 'error.message' };
          }
        },
        async getHistory() {
          try {
            const response = await axios.get(`${BASE_URL}/history`, { params });

            const responseData = response.data.data;
            console.log('responseData :>> ', responseData);

            console.log('search successful');
            return responseData;
          } catch (error: any) {
            console.error('search failed:', error.message);
            return { error: 'error.message' };
          }
        },
    }
});
