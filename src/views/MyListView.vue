<script lang="ts" setup>
import { ref } from 'vue';

const myWords = ref<{ english: string, spanish: string}[]>([{
    english: "to swallow",
    spanish: "tragar"
},{
    english: "to lick",
    spanish: "lamer"
}]);
</script>

<template>
    <main>
      <h1>My List of Words</h1>
      <ul>
        <li v-for="{english, spanish} of myWords">
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