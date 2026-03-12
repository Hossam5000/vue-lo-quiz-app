<script setup>
// imports
import q from "@/assets/data/quizzes.json";
import { ref, watch } from 'vue';

// cons
const quizzes = ref(q);
const search = ref("");

// watchers
watch(search,
  () => {
    quizzes.value =
      q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
  });

</script>

<template>
  <div class="container">
    <!-- Header -->
    <header>
      <h1>Quizzes</h1>
      <input type="text" v-model.trim="search" name="searchbar" id="searchbar" placeholder="search...">
    </header>

    <!-- options container -->
    <div class="options-container">
      <div class="card" v-for="quiz in quizzes" :key="quiz.id">
        <img :src="quiz.img" alt="Math">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div><!--./card-text-->
      </div><!--./card-->
    </div><!--./options-container-->
  </div><!--./container-->
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  display: flex;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 10px;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  padding: 10px;
  border: none;
  border-radius: 5px;

  background-color: rgba(128, 128, 128, 0.1);
}

.options-container {
  display: flex;
  flex-wrap: wrap;

  margin-top: 40px;
}

/* card */
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
