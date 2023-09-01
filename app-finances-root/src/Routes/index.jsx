import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, SignIn, SignUp } from "../Pages";
import { Account } from "app_my_account/Pages";
import { Transactions, CreateTransaction, EditTransaction } from "app_transactions/Pages";
import { HandleVueComponent } from "../Utils";
const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/account" element={<Account />} />
      <Route
        path="/transactions"
        element={
          <>
            <HandleVueComponent element={Transactions} id="transactions" route="/transactions" />
          </>
        }
      />
      <Route
        path="/transactions/new"
        element={
          <>
            <HandleVueComponent element={CreateTransaction} id="transactions" route="/transactions/new" />
          </>
        }
      />
      <Route
        path="/transactions/edit"
        element={
          <>
            <HandleVueComponent element={EditTransaction} id="transactions" route="/transactions/edit" />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
