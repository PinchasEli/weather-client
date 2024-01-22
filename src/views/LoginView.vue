<script setup lang="ts">
    import Login from '../components/Login.vue'
</script>
<template>
    <div class="Login">
        <span>Login to tour account</span>
        <Login />
    </div>
</template>
  
<style>
  @media (min-width: 1024px) {
    .login {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
  