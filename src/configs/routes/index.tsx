import { App } from "app/index";
import { routes } from "./routes";
import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
    errorElement: <NotFound />,
  },
]);

export { urls } from "./const";
