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
import AddProduct from "../components/AddProduct/AddProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/watches/${params.id}`),
      },
    ],
  },
]);
