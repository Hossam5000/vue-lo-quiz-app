<script setup>
// imports

// --features
import { defineProps } from 'vue';

// const
const props = defineProps(['item']);
</script>

<template>
    <main>
        <h1>{{ item.name }}</h1>
        <p>{{ item.questions.length }}</p>
        <img :src="item.img" :alt="item.name">
    </main>
</template>

<style scoped>
main {
    width: 400px;
    padding: 10px;
    border: 1px solid #000;
}
</style>