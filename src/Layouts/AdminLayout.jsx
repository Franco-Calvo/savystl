import React from "react";
import AdminNav from "../Components/AdminNav/AdminNav";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AdminNav />
      <Outlet />
    </div>
  );
}
