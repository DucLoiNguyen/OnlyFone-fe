import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import Home from "../pages/home";
import NotFound from "../pages/notfound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true, // Route mặc định cho '/'
          element: <Home />,
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
