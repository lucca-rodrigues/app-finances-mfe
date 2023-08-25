import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { redirectVuePage, redirectDynamicPage, goBackPage } from "app_finances_root/Utils";
import App from "./App.vue";

import "./globalStyles.css";
import Routes from "./Routes";

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

const dynamicProps = {
  redirectVuePage,
  redirectDynamicPage,
  goBackPage,
};
const app = createApp(App);
app.use(router);
app.provide("dynamicProps", dynamicProps);
app.mount("#transactions");
