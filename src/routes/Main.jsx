import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../components/Home/HomePage/HomePage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import AddToy from "../components/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";
import UpdateMyToy from "../components/UpdateMyToy/UpdateMyToy";
import Blogs from "../components/Blogs/Blogs";
import ViewDetails from "../components/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateMyToy/:id",
        element: <UpdateMyToy></UpdateMyToy>,
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-aothymoon59.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/toy/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-aothymoon59.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
