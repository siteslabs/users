import { router } from "configs/routes";
import { RouterProvider } from "react-router-dom";

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
