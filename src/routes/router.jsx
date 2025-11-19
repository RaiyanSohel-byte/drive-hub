import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Home from "../pages/Home";
import About from "../pages/About";
import Cars from "../pages/Cars";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "./privateroutes/PrivateRoute";
import Loader from "../components/common/Loader";
import CarDetails from "../pages/CarDetails";
import ErrorPage from "../pages/ErrorPage";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "cars",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoute>
            <Cars />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/:id",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);
