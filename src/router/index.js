// imports
import { createWebHistory, createRouter } from "vue-router";

// --views
import AppView from '@/App.vue';

// cons
const routes = [
    { path: "/", name: "home", component: AppView },

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;