import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./layouts/Layout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Favorites from "./pages/favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default router;
