import Transactions from "../Pages/Transactions";
import CreateTransaction from "../Pages/CreateTransaction";

const routes = [
  {
    path: "/",
    component: Transactions,
  },
  {
    path: "/new",
    component: CreateTransaction,
  },
];
export default routes;
