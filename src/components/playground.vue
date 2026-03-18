<script setup>
import Child from './Child.vue';

// imports
import { ref } from 'vue';

// const
const count = ref(0);

// functions
const add = (n) => count.value = count.value + n;
</script>

<template>
    {{ count }}
    <main>
        <h1>Playground</h1>
        <p>test the vue features</p>
        <Child @increaseBy="add" @decreaseBy="(n) => count -= n" />
    </main>
</template>

<style scoped>
main {
    width: 400px;
    padding: 10px;
    border: 1px solid #000;
}
</style>