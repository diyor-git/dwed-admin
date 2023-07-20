import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import OrdersStatus from "../pages/OrdersStatus";
import { Categories, RegionsType } from "../pages/Regions/pages";
import { Quizes, QuizType } from "../pages/Quiz/pages";
import {
  CreateProduct,
  ProductManufacture,
  ProductMeasure,
  ProductsList,
  ProductType,
} from "../pages/Product/pages";

function Router() {
  return (
    <Routes>
      <Route index path="/*" element={<Navigate to="/404" />} />
      <Route path="regions" element={<Outlet />}>
        <Route index element={<Categories />} />
        <Route path="type" element={<RegionsType />} />
      </Route>
      <Route path="quiz" element={<Outlet />}>
        <Route index element={<Quizes />} />
        <Route path="type" element={<QuizType />} />
      </Route>
      <Route path="products" element={<Outlet />}>
        <Route index element={<ProductsList />} />
        <Route path="measure" element={<ProductMeasure />} />
        <Route path="manufacture" element={<ProductManufacture />} />
        <Route path="type" element={<ProductType />} />
        <Route path="create" element={<CreateProduct />} />
      </Route>
      <Route path="orders-status" element={<OrdersStatus />} />
    </Routes>
  );
}

export default Router;
