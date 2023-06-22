import { Outlet } from "react-router-dom";

import { Sidebar } from "layouts/Sidebar";

const App = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};

export default App;
