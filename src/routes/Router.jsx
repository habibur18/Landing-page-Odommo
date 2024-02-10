import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home";
import PrivacyAndPolicy from "../Components/Pages/PrivacyPolicy/PrivacyAndPolicy";
import TermsAndConditions from "../Components/Pages/TermsAndCondition/TermsAndConditions";
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
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-and-policy",
        element: <PrivacyAndPolicy />,
      },
    ],
  },
]);
export default router;
