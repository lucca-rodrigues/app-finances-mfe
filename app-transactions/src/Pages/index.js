import { createApp } from "vue";
import TransactionsPage from "./Transactions";
import CreateTransactionPage from "./CreateTransaction";
import { redirectVuePage, redirectDynamicPage, goBackPage } from "app_finances_root/Utils";

const dynamicProps = {
  redirectVuePage,
  redirectDynamicPage,
  goBackPage,
};

export function Transactions(el, props) {
  const app = createApp(TransactionsPage);
  app.props = props;
  app.provide("dynamicProps", dynamicProps);
  app.mount(el);
}
export function CreateTransaction(el, props) {
  const app = createApp(CreateTransactionPage);
  app.props = props;
  app.provide("dynamicProps", dynamicProps);
  app.mount(el);
}
