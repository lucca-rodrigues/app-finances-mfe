import { createApp } from "vue";
import TransactionsPage from "./Transactions";
import CreateTransactionPage from "./CreateTransaction";

export function Transactions(el, props) {
  const app = createApp(TransactionsPage);
  app.props = props;
  app.mount(el);
}
export function CreateTransaction(el, props) {
  const app = createApp(CreateTransactionPage);
  app.props = props;
  app.mount(el);
}
