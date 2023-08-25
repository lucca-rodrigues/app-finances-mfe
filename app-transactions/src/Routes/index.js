import Transactions from "../Pages/Transactions";
import CreateTransactions from "../Pages/CreateTransaction";

const routes = [
  {
    path: "/",
    component: Transactions,
  },
  {
    path: "/new",
    component: CreateTransactions,
  },
];
export default routes;
