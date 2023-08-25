import React from "react";
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from "react-router-dom";
import { Home, SignIn, Signup } from "../Pages";
import { Account } from "app_my_account/Pages";
import { Transactions, CreateTransaction } from "app_transactions/Pages";
import { useAuth } from "../Context/Auth";
import HandleVueComponent from "../Utils/handleVueComponent";

function PrevPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Header</h1>
      <button onClick={() => navigate(-1)}>⬅️ Voltar</button>
    </div>
  );
}
function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Header</h1>
      <button onClick={() => navigate("/transactions/new")}>📝 Criar novo</button>
    </div>
  );
}

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
      element: (
        <>
          <Header />
          <HandleVueComponent element={Transactions} id="transactions" route="/transactions" />
        </>
      ),
    },
    {
      path: "/transactions/new",
      element: (
        <>
          <PrevPage />
          <HandleVueComponent element={CreateTransaction} id="transactions" route="/transactions/new" />,
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
