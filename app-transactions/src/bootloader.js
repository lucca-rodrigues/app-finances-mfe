import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { redirectVuePage } from "app_finances_root/Utils";
import App from "./App.vue";

import "./globalStyles.css";
import Routes from "./Routes";

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

const app = createApp(App);
app.use(router);
app.provide("redirectVuePage", redirectVuePage);
app.mount("#transactions");
