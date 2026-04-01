import { createBrowserRouter } from "react-router-dom";

// Auth Pages
import LoginPage from "../features/auth/pages/LoginPage";
import SignupPage from "../features/auth/pages/SignupPage";


import LandingPage from "../shared/pages/LandingPage";
// import ProductDetailPage from "@/features/product/pages/ProductDetailPage"
import DashboardPage from "../features/dashboard/pages/DashboardPage";
// // Protected Route
import ProtectedRoute from "../shared/components/ProtectedRoute";

export const router = createBrowserRouter([
  // 🌐 Public Routes
    {
      path: "/",
      element: <LandingPage />
    },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },

    // 🔐 Protected Routes
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      )
    },

  //   {
  //     path: "/product/:slug",
  //     element: <ProductDetailPage />
  //   }
]);
