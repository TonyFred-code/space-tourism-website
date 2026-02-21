import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Error from "../pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

export default router;
