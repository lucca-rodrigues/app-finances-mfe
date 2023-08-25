import { createApp } from "vue";
import TransactionsPage from "./Transactions";
import CreateTransactionPage from "./CreateTransaction";
import { redirectVuePage } from "app_finances_root/Utils";

export function Transactions(el, props) {
  const app = createApp(TransactionsPage);
  app.props = props;
  app.provide("redirectVuePage", redirectVuePage);
  app.mount(el);
}
export function CreateTransaction(el, props) {
  const app = createApp(CreateTransactionPage);
  app.props = props;
  app.provide("redirectVuePage", redirectVuePage);
  app.mount(el);
}
