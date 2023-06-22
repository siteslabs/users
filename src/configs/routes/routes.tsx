import { Team } from "pages/Team";
import { urls } from "./const";
import { Navigate, Outlet, RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: urls.team.path,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Team />,
      },
    ],
  },
  {
    index: true,
    element: <Navigate to={"/team"} />,
  },
];
