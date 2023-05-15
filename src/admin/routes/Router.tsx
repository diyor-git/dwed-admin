import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Regions from "../pages/Regions";
import Subcategory from "../pages/Regions/pages/Subcategory";
import FinalCategory from "../pages/Regions/pages/FinalCategory";

function Router() {
  return (
    <Routes>
      <Route index path="/*" element={<Navigate to="/404" />} />
      <Route path="regions" element={<Outlet />}>
        <Route index element={<Regions />} />
        <Route path=":id" element={<Outlet />}>
          <Route index element={<Subcategory />} />
          <Route index path=":id" element={<FinalCategory />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
