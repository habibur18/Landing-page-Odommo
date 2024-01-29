import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Contact/About.jsx";
import ConMain from "./Components/Contact/ConMain.jsx";
import Content from "./Components/Contact/Content.jsx";
import Home from "./Components/Home/Home.jsx";
import "./index.css";
import Main from "./Layout/Main.jsx";
// Route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/home",
    element: <ConMain />,
    children: [
      {
        path: "/home",
        element: <Content />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
