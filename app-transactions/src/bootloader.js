import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import "./globalStyles.css";
import Routes from "./Routes";

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

const app = createApp(App);
app.use(router);
app.mount("#transactions");
