import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, SignIn, Signup } from "../Pages";
import { Account } from "app_my_account/Pages";
export default function Routes() {
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
  ]);

  return <RouterProvider router={router} />;
}
