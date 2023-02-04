import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Quotes from "./pages/Quotes/API_Quotes";
import Movies from "./pages/Movies/API_Movies";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pages/Sobre",
    element: <Sobre />,
  },
  {
    path: "/pages/API_Quotes",
    element: <Quotes />,
  },
  {
    path: "/pages/API_Movies",
    element: <Movies />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;