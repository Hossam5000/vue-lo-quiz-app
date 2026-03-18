<script setup>
// imports
import { defineProps } from 'vue';

// features
const props = defineProps(['finalResult', 'totalResult']);


</script>

<template>
    <div class="results">
        <p>Your Results...</p>
        <h1>{{ `${finalResult}/${totalResult}` }}</h1>
    </div>
</template>


<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 20px;
}

h1 {
    font-size: 80px;
}
</style>