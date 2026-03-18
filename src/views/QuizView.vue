<script setup>
// imports
// -- SFCs
import Question from '@/components/Question.vue';
import QuizHeader from '@/components/QuizHeader.vue';
import Result from '@/components/Result.vue';

// --features
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

// --data
import quizes from '@/assets/data/quizzes.json';

// cons
const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find(item => item.id === quizId);
const currentQuestionIndex = ref(0);

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);

const barPercentage = computed(() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`);

const numberOfcorrectAnswers = ref(0);
const showResults = ref(false);

// functions
const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfcorrectAnswers.value++;
    }

    if (quiz.questions.length - 1 === currentQuestionIndex.value) {
        showResults.value = true;
    }

    currentQuestionIndex.value++;
}

// test
// console.log(questionStatus)
</script>

<template>
    {{ barPercentage }}
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
        <div>
            <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected" />
            <Result v-else :finalResult="numberOfcorrectAnswers" :totalResult="quiz.questions.length" />
        </div>
    </div>
</template>

<style scoped></style>