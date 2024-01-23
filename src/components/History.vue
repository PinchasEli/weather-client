<script setup lang="ts">
  import WeatherItem from './WeatherItem.vue'

</script>

<template>
  <WeatherItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WeatherItem>
</template>
