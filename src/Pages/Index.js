import { createBrowserRouter } from "react-router-dom";
import Index from "./Index/Index";
import IndexLayout from "../Layouts/IndexLayout";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Files from "./Admin/Files/Files";
import FilesEdit from "./Admin/FilesEdit/FilesEdit";
import Subscriptions from "./Subscriptions/Subscriptions";
import Explorer from "./Explorer/Explorer";
import AdminPanel from "./Admin/AdminPanel";
import AdminLayout from "../Layouts/AdminLayout";
import Categories from "./Admin/Categories/Categories";
import AdminLayoutWrapper from "./Admin/Admin/AdminWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/subscription", element: <Subscriptions /> },
      { path: "/explore", element: <Explorer /> },
    ],
  },
  {
    path: "/",
    element: (
      <AdminLayoutWrapper>
        <AdminLayout />
      </AdminLayoutWrapper>
    ),
    children: [
      { path: "/adminpanel", element: <AdminPanel /> },
      { path: "/adminpanel/categories", element: <Categories /> },
      { path: "/adminpanel/upload", element: <Files /> },
      { path: "/adminpanel/files", element: <FilesEdit /> },
    ],
  },
]);
