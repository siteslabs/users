import { router } from "configs/routes";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "store/index";

const Root = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default Root;
