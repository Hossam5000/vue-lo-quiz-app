// imports
import { createWebHistory, createRouter } from "vue-router";

// --views
import QuizesView from "@/views/QuizesView.vue";
import QuizView from "@/views/QuizView.vue";
import Playground from "@/components/playground.vue";

// cons
const routes = [
    { path: "/", name: "quizzes", component: QuizesView },
    { path: "/quiz/:id", name: "quiz", component: QuizView },
    { path: "/playground", name: "playground", component: Playground },

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;