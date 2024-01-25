<script lang="ts">
  import { useWeatherStore } from '../stores/weather';

  export default {
    data() {
      return {
        cityInput: '',
        errorCityInput: '',
        isValid: false,
        isLoading: false,
        weatherStore: useWeatherStore()
      };
    },
    methods: {
      async submitForm() {
        console.log('Text submitted:', this.cityInput);
        if ( !this.cityInput ){
          this.errorCityInput = 'This filed is required';
          return;
        }
        this.errorCityInput = '';
        this.isLoading = true;
        const response = await this.weatherStore.getWeather(this.cityInput);
        this.isLoading = false;
        this.cityInput = '';
        console.log('SearchForm response :>> ', response);
      },
    },
    watch: {
      cityInput(newValue, oldValue) {
        console.log('Input changed:', newValue);
        this.errorCityInput = this.cityInput?.length === 1 ? 'This filed min 2 chars' : '';
        this.isValid = this.cityInput?.length > 1 ? true : false;
      },
    },
  };
</script>

<template>
  <div class="form-content">
    <label for="cityInput">Enter city for get result weather:</label>
    <input class="form-input" v-model="cityInput" type="text" id="cityInput" />
    <span class="validation-error" v-if="errorCityInput" >{{ errorCityInput }}</span>

    <button class="submit-button" @click="submitForm" :disabled="!isValid || isLoading">Check</button>
    <span class="validation-error" v-if="isLoading" >Please wait for results</span>
  </div>
</template>
  
<style scoped>
  .form-content {
    display: flex;
    flex-direction: column;
  }
  .form-input {
    width: 200px;
    padding: 8px;
    margin-bottom: 10px;
  }

  .submit-button {
    background-color: #4caf50; /* Green */
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .validation-error {
    color: red;
  }
  .wait {
    color: gray;
    font-size: 2rem;
  }
</style>
  