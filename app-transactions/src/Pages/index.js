import { createApp } from "vue";
import TransactionsPage from "./Transactions";
import CreateTransactionPage from "./CreateTransaction";
import EditTransactionPage from "./EditTransaction";

import { redirectDynamicPage, goBackPage } from "app_finances_root/Utils";
import Routes from "../Routes";
import { createRouter, createWebHistory } from "vue-router";
import store from "../Context/store";

const dynamicProps = {
  redirectDynamicPage,
  goBackPage,
};

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

export function Transactions(el, props) {
  const app = createApp(TransactionsPage);
  app.props = props;
  app.provide("dynamicProps", dynamicProps);
  app.use(store);
  app.use(router);
  app.mount(el);
}

export function CreateTransaction(el, props) {
  const app = createApp(CreateTransactionPage);
  app.props = props;
  app.provide("dynamicProps", dynamicProps);
  app.use(store);
  app.use(router);
  app.mount(el);
}

export function EditTransaction(el, props) {
  const app = createApp(EditTransactionPage);
  app.props = props;
  app.provide("dynamicProps", dynamicProps);
  app.use(store);
  app.use(router);
  app.mount(el);
}
