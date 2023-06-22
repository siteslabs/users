import { App } from "app/index";
import { routes } from "./routes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);

export { urls } from "./const";
