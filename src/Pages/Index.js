import { createBrowserRouter } from "react-router-dom";
import Index from "./Index/Index";
import IndexLayout from "../Layouts/IndexLayout";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Files from "./Files/Files";
import Subscriptions from "./Subscriptions/Subscriptions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/uploadfile", element: <Files /> },
      { path: "/subscription", element: <Subscriptions /> },
    ],
  },
]);
