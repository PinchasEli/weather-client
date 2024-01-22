<script setup lang="ts">
  import { RouterLink, RouterView, useRouter } from 'vue-router'
  import { ref, watch } from 'vue';
  import { useUserStore } from './stores/user';

  import HelloWorld from './components/HelloWorld.vue'

  const router = useRouter();
  const userStore = useUserStore();

  const msg = ref('Please Login');

  watch(userStore, () => {
    msg.value = userStore.user ? `Welcome ${userStore.user.username}` : 'Please Login';
    !userStore.user && router.push('/login');
    userStore.user && router.push('/');
  });
  
  const logout = () => {
    userStore.logout();
  };
  userStore.init();
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="msg" />
      <nav>
        <RouterLink v-if="!userStore.user" to="/login">Login</RouterLink>
        <RouterLink v-if="userStore.user" to="" @click="logout">Logout</RouterLink>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/history">History</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
