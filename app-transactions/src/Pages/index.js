import { createApp } from "vue";
import TransactionsPage from "./Transactions";
import CreateTransactions from "./CreateTransaction";

export function Transactions(el, props) {
  const app = createApp(TransactionsPage);
  app.props = props;
  app.mount(el);
}
export function NewTransactions(el, props) {
  const app = createApp(CreateTransactions);
  app.props = props;
  app.mount(el);
}
