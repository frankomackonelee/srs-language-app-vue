<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue';
const links = ref([
  {
    title: "Home",
    to: { name: 'home' }
  },
  {
    title: "My List",
    to: { name: 'my-list' }
  },
  {
    title: "Profile",
    to: { name: 'profile' }
  }
])
const isOpen = ref<boolean>(true);

</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="isOpen">
      <v-list>
        <v-list-group>

          <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="(item, index) in links" link :index="index" :title="item.title" :to="item.to">
          </v-list-item>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-btn @click="isOpen = !isOpen" density="compact">Open Close</v-btn>

    <RouterView />
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
}

a.v-list-item{
  display: block;
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
