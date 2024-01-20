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
</script>

<template>
    <main>
      <h1>My List of Words</h1>
      <ul>
        <li v-for="({english, spanish}, id) of myWords" :key="id">
            <div>English: {{ english }}</div>
            <div>Spanish: {{ spanish }}</div>
        </li>
      </ul>
    </main>
</template>

<style>
ul li{
    padding-top: 10px;
}
</style>