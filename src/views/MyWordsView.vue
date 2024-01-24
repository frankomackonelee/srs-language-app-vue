<script lang="ts" setup>
import { ref } from 'vue';
import type { WordToLearn } from '@/types/word-to-learn';
import type { Entity } from '@/types/entity';
const myWords = ref<(WordToLearn&Entity)[]>([{
    id: 1,
    english: "to swallow",
    spanish: "tragar"
},{
    id: 2,
    english: "to lick",
    spanish: "lamer"
}]);
function doThis(spanish: string){
    console.log("TODO: navigate to: " + spanish)
}
</script>

<template>
    <main>
      <h1>My List of Words</h1>
      <v-card>
        <v-list linse="two">
            <v-list-item v-for="({english, spanish}, id) of myWords" :key="id" :title="spanish" :subtitle="english" @click="doThis(spanish)"
            >
            </v-list-item>
        </v-list>
      </v-card>
    </main>
</template>