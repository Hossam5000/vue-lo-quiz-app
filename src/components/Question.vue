<script setup>
// imports
import { defineProps, defineEmits } from 'vue';

// features
const { question } = defineProps(['question']);
const emits = defineEmits(['selectOption']);

// functions
const emitSelectedOption = (isCorrect) => {
    emits('selectOption', isCorrect);
};
</script>

<template>
    <div class="questions-container">
        <h1 class="question">
            {{ question.text }}
        </h1>
    </div><!--./questions-container-->

    <div class="options-container" v-for="option in question.options" :key="option.id">
        <div class="option" @click="emitSelectedOption(option.isCorrect)">
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div><!--./option-->

    </div><!--./options-container-->
</template>

<style scoped>
.questions-container {
    margin-top: 40px;
}

.question {
    margin-bottom: 20px;
    font-size: 40px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    font-size: 30px;
    background-color: bisque;
}

.option-value {
    width: 100%;
    padding: 0 20px;
    font-size: 30px;
    background-color: rgba(244, 239, 239);
}
</style>