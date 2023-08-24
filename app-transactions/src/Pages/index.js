import { createApp } from "vue";
import TransactionsPage from "./Transactions";

export function Transactions(el, props) {
  const app = createApp(TransactionsPage);
  app.props = props;
  app.mount(el);
}
