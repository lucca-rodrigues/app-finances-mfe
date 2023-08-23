import { createApp } from "vue";

import TransactionsPage from "./Transactions";

export function Transactions(el) {
  createApp(TransactionsPage).mount(el);
}
