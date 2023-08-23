import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, SignIn, Signup } from "../Pages";

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
  ]);

  return <RouterProvider router={router} />;
}
