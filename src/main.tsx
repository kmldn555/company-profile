import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import BlogListPage from "./pages/BlogListPage";
import TeamsPage from "./pages/TeamsPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import { authLoader } from "./loaders/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/blog",
    element: <BlogListPage />,
  },
  {
    path: "/teams",
    element: <TeamsPage />,
  },
  {
    path: "/createblog",
    element: <CreateBlogPage />,
    loader: authLoader,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/blogs/:objectId",
    element: <BlogDetailPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
