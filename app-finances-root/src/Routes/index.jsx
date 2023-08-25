import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, SignIn, Signup } from "../Pages";
import { Account } from "app_my_account/Pages";
import { Transactions, CreateTransaction } from "app_transactions/Pages";
import { HandleVueComponent } from "../Utils";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account" element={<Account />} />
      <Route
        path="/transactions"
        element={
          <>
            {/* <Configure /> */}
            <HandleVueComponent element={Transactions} id="transactions" route="/transactions" />
          </>
        }
      />
      <Route
        path="/transactions/new"
        element={
          <>
            {/* <Configure /> */}
            <HandleVueComponent element={CreateTransaction} id="transactions" route="/transactions/new" />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
