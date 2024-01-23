<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { useRouter } from 'vue-router';
    
    import { useUserStore } from '../stores/user';
    
    const router = useRouter();
    const userStore = useUserStore();

    const username = ref('');
    const password = ref('');

    const login = async () => {

        const userData = { username: username.value, password: password.value };
        console.log('login :>> ', userData);
        const success = await userStore.login(userData);
    };

    watch(userStore, () => {
        userStore.user && router.push('/');
    });
</script>

<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
        <br />
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  

  