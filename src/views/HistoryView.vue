<script setup lang="ts">
  import History from '../components/History.vue'
</script>
<template>
  <div class="history">
    <h1>This is an HistoryView page</h1>
    <History/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .history {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
