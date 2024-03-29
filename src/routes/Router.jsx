import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../App/Admin/LoginSignup/AdminLogin";
import AdminSignup from "../App/Admin/LoginSignup/AdminSignup";
import AboutUs from "../App/Pages/AboutUs/AboutUs";
import Blog from "../App/Pages/Blog/Blog";
import SingleBlog from "../App/Pages/Blog/SingleBlog/SingleBlog";
import Contact from "../App/Pages/Contact/Contact";
import Home from "../App/Pages/Home/Home";
import NotFoundPage from "../App/Pages/NotFoundPage/NotFoundPage";
import PrivacyAndPolicy from "../App/Pages/PrivacyPolicy/PrivacyAndPolicy";
import Services from "../App/Pages/Services/Services";
import SingleService from "../App/Pages/Services/SingleService/SingleService";
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
      { path: "about-us", element: <AboutUs /> },
      { path: "terms-of-use", element: <TermsAndConditions /> },
      { path: "privacy-policy", element: <PrivacyAndPolicy /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <SingleBlog /> },
      { path: "services", element: <Services /> },
      { path: "services/:id", element: <SingleService /> },
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
export default router;
