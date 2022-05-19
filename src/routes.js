import { Route, Routes } from "react-router-dom";

import Dashboard from "./views/content/dashboard";
import Start from "./views/common/start";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Dashboard />}></Route>
      <Route path="/" exact element={<Start />}></Route>
    </Routes>
  );
}

export default AppRoutes;
