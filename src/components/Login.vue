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
  <div class="form-content">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input class="form-input" v-model="username" type="text" id="username" required />
      <br />
      <label for="password">Password:</label>
      <input class="form-input" v-model="password" type="password" id="password" required />
      <br />
      <button class="submit-button" type="submit">Login</button>
    </form>
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
</style>
  