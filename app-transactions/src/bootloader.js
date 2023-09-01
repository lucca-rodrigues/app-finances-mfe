import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { redirectDynamicPage, goBackPage } from "app_finances_root/Utils";
import App from "./App.vue";

import "./globalStyles.css";
import Routes from "./Routes";
import store from "./Context/store";

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

const dynamicProps = {
  redirectDynamicPage,
  goBackPage,
};
const app = createApp(App);
app.use(router);
app.use(store);
app.provide("dynamicProps", dynamicProps);
app.mount("#transactions");
