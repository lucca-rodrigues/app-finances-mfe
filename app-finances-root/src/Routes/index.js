import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, SignIn, Signup } from "../Pages";
import { Account } from "app_my_account/Pages";
import { Transactions } from "app_transactions/Pages";

import { useAuth } from "../Context/Auth";
import HandleVueComponent from "../Utils/handleVueComponent";

export default function Routes() {
  const { userToken } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/transactions",
      element: <HandleVueComponent element={Transactions} userToken={userToken} />,
    },
  ]);

  return <RouterProvider router={router} />;
}
