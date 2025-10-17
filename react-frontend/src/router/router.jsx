import { createBrowserRouter } from "react-router";
import UserLayout from "../layouts/UserLayout";
import Product from "../pages/Product";
import AddProduct from "../pages/AddProduct";
import MyOrder from "../pages/MyOrder";
import Login from "../pages/Login";
import UserOrders from "../pages/UserOrders";

const router = createBrowserRouter([
  {
    //route object
    path: "/",
    Component: UserLayout,
    children: [
      { index: true, Component: Login },
      { path: "product-list", Component: Product },
      { path: "add-product", Component: AddProduct },
      { path: "my-order", Component: MyOrder },
      { path: "user-orders", Component: UserOrders },
    ],
  },
]);

export default router;
