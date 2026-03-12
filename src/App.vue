<script setup>
// imports
// --data
import q from "@/assets/data/quizzes.json";

// --features
import { ref, watch } from 'vue';

// --components
import Card from '@/components/Card.vue'
import BlogPost from "./components/BlogPost.vue";

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
    <BlogPost v-for="quiz in quizzes" :key="quiz.id" :item="quiz" />
    <div class="options-container">
      <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
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
</style>
