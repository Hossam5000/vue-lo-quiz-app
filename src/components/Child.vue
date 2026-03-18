<script setup>
// imports
import { defineEmits } from 'vue';

// const 
const emits = defineEmits(['increaseBy', 'decreaseBy']);

</script>

<template>
    <h1>Child</h1>
    <button @click="$emit('increaseBy', 1)">increase by 1</button>
    <button @click="$emit('decreaseBy', 1)">decrease by 1</button>
</template>