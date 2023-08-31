import Transactions from "../Pages/Transactions";
import CreateTransaction from "../Pages/CreateTransaction";
import EditTransaction from "../Pages/EditTransaction";
const routes = [
  {
    path: "/",
    component: Transactions,
  },
  {
    path: "/new",
    component: CreateTransaction,
  },
  {
    path: "/edit",
    // path: "/edit/:id",
    component: EditTransaction,
    // props: (route) => ({ id: route.params.id }),
  },
];

export default routes;
