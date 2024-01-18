<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-navigation-drawer>
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="List Item 1">
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      </v-list-item>
      <v-list-item link title="List Item 2">
        <RouterLink :to="{ name: 'my-list' }">My List</RouterLink>
      </v-list-item>
      <v-list-item link title="List Item 3">
        <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
      </v-list-item>
    </v-navigation-drawer>
    <RouterView />
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
}


nav {
  display: flex;
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
  }

  header .wrapper {
    display: flex;
    flex-direction: row;
    place-items: flex-start;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
