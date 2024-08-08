import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { loadAccount } from "./pages/Login";
import Store from "./pages/Store";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: loadAccount,
    errorElement: <NotFound/>
  },
  {
    path: "/store",
    element: <Store/>
  },
  {
    path: '/store/edit_product'
  }
]);
