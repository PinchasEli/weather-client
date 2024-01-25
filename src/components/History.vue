<script setup lang="ts">
  import { ref, watch } from 'vue';

  import { useWeatherStore } from '../stores/weather';

  import WeatherItem from './WeatherItem.vue'
  
  const weatherStore = useWeatherStore();

  const historyList = ref([]);
  const isLoading = ref(true);
  const noData = ref(false);

  const loadingData = async () => {
    const response = await weatherStore.getHistory();
    isLoading.value = false;
    console.log('response :>> ', response);
    historyList.value = response || [];
    noData.value = historyList.value?.length ? false:true;
  }

  loadingData();
</script>

<template>
  <span v-if="isLoading">Please wait...</span>
  <template v-if="!isLoading">
    <WeatherItem v-for="(item, index) in historyList" :key="index">
      {{ item }}
    </WeatherItem>
  </template>
  <span v-if="noData">No data found.</span>
</template>
