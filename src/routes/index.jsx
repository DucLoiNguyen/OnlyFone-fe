import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import AuthLayout from "@/layouts/authlayout";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import Login from "../pages/login";
import ProtectedRoute from "@/components/protectedroute";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true, // Route mặc định cho '/'
          element: (
            <Home />
        ),
        },
      ],
    },
    {
      path: "/login",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      path: "*", // Catch-all route cho 404
      element: <NotFound />,
    },
  ],
  {
    basename: "/OnlyFone-fe", // Thêm basename
  },
);

export default router;
