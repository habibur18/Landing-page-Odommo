import React from "react";
import { Outlet } from "react-router-dom";
import ConFooter from "./ConFooter";
import ConHead from "./ConHead";

export default function ConMain() {
  return (
    <div>
      <ConHead />
      <Outlet />
      <ConFooter />
    </div>
  );
}
