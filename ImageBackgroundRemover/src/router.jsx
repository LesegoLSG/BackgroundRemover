import HomePage from "./Pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/generate-image",
    element: <MainPage />,
  },
]);

export default routes;
