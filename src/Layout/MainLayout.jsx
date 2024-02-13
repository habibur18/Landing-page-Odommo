import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../App/Shared/Footer";
import Navbar from "../App/Shared/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
