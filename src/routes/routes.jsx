import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import GeneralError from "../pages/GeneralError.jsx";
import Destination from "../pages/Destination.jsx";
import Crew from "../pages/Crew.jsx";

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
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
