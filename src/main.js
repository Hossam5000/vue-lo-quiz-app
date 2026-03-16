//imports
import { createApp } from 'vue'
import App from './App.vue'
import "@/styles/base.css";

// router
import router from "@/router/index.js"

// cons
const app = createApp(App);

// adding features
app.use(router);
app.mount('#app');
