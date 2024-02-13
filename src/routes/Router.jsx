import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../App/Admin/LoginSignup/AdminLogin";
import AdminSignup from "../App/Admin/LoginSignup/AdminSignup";
import Blog from "../App/Pages/Blog/Blog";
import SingleBlog from "../App/Pages/Blog/SingleBlog/SingleBlog";
import Contact from "../App/Pages/Contact/Contact";
import Home from "../App/Pages/Home/Home";
import PrivacyAndPolicy from "../App/Pages/PrivacyPolicy/PrivacyAndPolicy";
import Services from "../App/Pages/Services/Services";
import TermsAndConditions from "../App/Pages/TermsAndCondition/TermsAndConditions";
import AdminLayout from "../Layout/AdminLayout";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact-us", element: <Contact /> },
      { path: "terms-and-conditions", element: <TermsAndConditions /> },
      { path: "privacy-and-policy", element: <PrivacyAndPolicy /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <SingleBlog /> },
      { path: "services", element: <Services /> },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "admin-login", element: <AdminLogin /> },
      { path: "admin-signup", element: <AdminSignup /> },
    ],
  },
]);
export default router;
