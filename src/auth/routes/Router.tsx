import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages";

function Router() {
  return (
    <Routes>
      <Route index path="/*" element={<Navigate to="/404" />} />
      <Route index element={<Navigate to="login" replace />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default Router;
