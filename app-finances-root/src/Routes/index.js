// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { Home, SignIn, Signup } from "../Pages";
// import { Account } from "app_my_account/Pages";
// import { Transactions } from "app_transactions/Pages";

// import { useAuth } from "../Context/Auth";
// import HandleVueComponent from "../Utils/handleVueComponent";

// export default function Routes() {
//   const { backendToken } = useAuth();

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//     },
//     {
//       path: "/signin",
//       element: <SignIn />,
//     },
//     {
//       path: "/signup",
//       element: <Signup />,
//     },
//     {
//       path: "/account",
//       element: <Account />,
//     },
//     {
//       path: "/transactions",
//       element: <HandleVueComponent element={Transactions} id="transactions" />,
//     },
//   ]);

//   window.globalInfos = { backendToken };

//   return <RouterProvider router={router} />;
// }

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, SignIn, Signup } from "../Pages";
import { Account } from "app_my_account/Pages";
import { Transactions } from "app_transactions/Pages";
import { useAuth } from "../Context/Auth";
import HandleVueComponent from "../Utils/handleVueComponent";

const App = () => {
  const { backendToken } = useAuth();

  // Salve o token como um cookie acessível em todos os subdomínios
  document.cookie = `backendToken=${backendToken}; domain=.localhost; path=/`;

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
      element: <HandleVueComponent element={Transactions} id="transactions" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
