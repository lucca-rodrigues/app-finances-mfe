import { createApp } from "vue";

import TransactionsPage from "./Transactions";

export function Transactions(el, props) {
  // console.log("props", el, props);
  createApp(TransactionsPage).mount(el, props);
}
