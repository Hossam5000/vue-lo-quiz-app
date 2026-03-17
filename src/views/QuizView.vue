<script setup>
// imports
// -- SFCs
import Question from '@/components/Question.vue';
import QuizHeader from '@/components/QuizHeader.vue';

// --features
import { useRoute } from 'vue-router';
import { ref } from 'vue';

// --data
import quizes from '@/assets/data/quizzes.json';

// cons
const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find(item => item.id === quizId);
const currentQuestionIndex = ref(0);
const questionStatus = `${currentQuestionIndex.value}/${quiz.questions.length}`;

// test
// console.log(questionStatus)
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" />
        <div>
            <Question :question="quiz.questions[currentQuestionIndex]" />
        </div>
    </div>
</template>

<style scoped></style>