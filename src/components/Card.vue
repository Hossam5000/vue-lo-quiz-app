<script setup>
// imports
import { defineProps } from 'vue';

// cons
const props = defineProps(['item'])
</script>

<template>
    <div class="card">
        <img :src="item.img" :alt="item.name">
        <div class="card-text">
            <h2>{{ item.name }}</h2>
            <p>{{ item.questions.length }} questions</p>
        </div><!--./card-text-->
    </div><!--./card-->
</template>


<style scoped>
.card {
    width: 310px;

    margin-bottom: 35px;
    margin-right: 20px;
    border-radius: 2%;

    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: pointer;
}

.card img {
    width: 100%;
    height: 190px;

    margin: 0;
}

.card .card-text {
    padding: 0 5px;
}

.card .card-text h2 {
    font-weight: bold;
}
</style>