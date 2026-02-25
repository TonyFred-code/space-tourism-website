import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import GeneralError from "../pages/GeneralError.jsx";
import Destination from "../pages/Destination.jsx";

const router = createBrowserRouter([
  {
    errorElement: <GeneralError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
