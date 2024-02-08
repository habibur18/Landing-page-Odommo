import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
