<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue';
const profile = ref({
  name: 'profile'
});
const links = ref([
  {
    title: "Home",
    to: { name: 'home' }
  },
  {
    title: "My Words",
    to: { name: 'my-words' }
  },
  {
    title: "My Phrases",
    to: { name: 'my-phrases' }
  },
  {
    title: "My Grammar",
    to: { name: 'my-structures' }
  }
])
const isOpen = ref<boolean>(true);

</script>

<template>

  <v-app>

    <v-app-bar
      color="primary"
      density="compact"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="isOpen = !isOpen"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Learn Your Language</v-app-bar-title>

      <template v-slot:append>
        <v-menu offset-y>

          <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-dots-vertical"
              >
              </v-btn>
          </template>

          <v-list>
            <v-list-item link>
              <v-list-item-title>Overflow 1</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Overflow 2</v-list-item-title>
            </v-list-item>
          </v-list>

        </v-menu>

      </template>

    </v-app-bar>

    <v-navigation-drawer v-model="isOpen" width="256">
      <v-list>
        <v-list-group>

          <v-list-item title="Profile" subtitle="example@user.com" :to="profile">
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="(item, index) in links" link :key="index" :title="item.title" :to="item.to">
          </v-list-item>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <RouterView />

  </v-app>
</template>

<style>
main{
  margin-top: 48px;
}
</style>
