import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Regions from "../pages/Regions";
import AddRegion from "../pages/Regions/AddRegion";

function Router() {
  return (
    <Routes>
      <Route index path="/*" element={<Navigate to="/404" />} />
      <Route path="regions" element={<Outlet />}>
        <Route index element={<Regions />} />
        <Route path="add" element={<AddRegion />} />
      </Route>
    </Routes>
  );
}

export default Router;
