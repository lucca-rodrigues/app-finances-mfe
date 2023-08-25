import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, SignIn, Signup } from "../Pages";
import { Account } from "app_my_account/Pages";
import { Transactions, CreateTransaction } from "app_transactions/Pages";
import { useAuth } from "../Context/Auth";
import HandleVueComponent from "../Utils/handleVueComponent";

const App = () => {
  const { backendToken } = useAuth();
  const globalInfos = {
    backendToken,
  };

  // Salve o token como um cookie acessível em todos os subdomínios
  const currentDomain = window.location.hostname;
  document.cookie = `@app_myfinances=${JSON.stringify(globalInfos)}; domain=${currentDomain}; path=/`;

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
    {
      path: "/transactions/new",
      element: <HandleVueComponent element={CreateTransaction} id="transactions" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
