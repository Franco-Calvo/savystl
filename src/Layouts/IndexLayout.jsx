import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function IndexLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
