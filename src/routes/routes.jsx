import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MainLayout from "../Layouts/MainLayout";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Products from "../components/Products/Products";
import About from "../components/About/About";
import DashboardLaout from "../Layouts/DashboardLaout";
import Dashboard from "../components/Dashboard/Dashboard";
import AllProducts from "../components/AllProducts/AllProducts";
import EditProduct from "../components/EditProduct/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/watches"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("http://localhost:3000/watches"),
      },
      {
        path: "/products/details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/watches/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLaout />,
    children: [
      {
        index: 1,
        element: <Dashboard />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
        loader: () => fetch(`http://localhost:3000/watches`),
      },
      {
        path: "all-products/edit/:id",
        element: <EditProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/watches/${params.id}`),
      },
    ],
  },
]);
