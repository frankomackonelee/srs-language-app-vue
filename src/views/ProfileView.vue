<script setup lang="ts">
import { ref } from 'vue';
import type { Profile } from '@/types/profile';
const profile = ref<Profile>({
  firstName: "Frank",
  lastName: "Melon",
  email: "fank@melon.co.uk",
  languageMedium: "English",
  languageTarget: "Spanish",
});
</script>

<template>
  <main>
    <v-card>
      <v-sheet>
        <v-table>
                <tbody>
                  <tr align="right">
                    <th>Name</th>
                    <td>{{ profile.firstName }}</td>
                  </tr>

                  <tr align="right">
                    <th>Surname</th>
                    <td>{{ profile.lastName }}</td>
                  </tr>

                  <tr align="right">
                    <th>Email</th>
                    <td>{{ profile.email }}</td>
                  </tr>

                  <tr align="right">
                    <th>Native Language</th>
                    <td>{{ profile.languageMedium }}</td>
                  </tr>

                  <tr align="right">
                    <th>Target Language</th>
                    <td>{{ profile.languageTarget }}</td>
                  </tr>
                </tbody>
              </v-table>
        </v-sheet>
    </v-card>

  </main>
</template>

<style scoped>
.v-card{
  margin: 10px;
}
</style>
