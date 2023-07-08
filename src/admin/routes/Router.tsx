import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Regions from "../pages/Regions";
import Subcategory from "../pages/Regions/pages/Subcategory";
import FinalCategory from "../pages/Regions/pages/FinalCategory";
import RegionsType from "../pages/Regions/pages/RegionsType";
import Quiz from "../pages/Quiz";
import QuizType from "../pages/Quiz/pages/QuizType";
import QuizSubcategory from "../pages/Quiz/pages/QuizSubcategory";
import QuizFinalCategory from "../pages/Quiz/pages/QuizFinalCategory";
import Product from "../pages/Product";
import ProductsSubCategory from "../pages/Product/pages/ProductList/ProductsSubCategory";
import ProductFinalCategory from "../pages/Product/pages/ProductList/ProductsFinalCategory";
import OrdersStatus from "../pages/OrdersStatus";
import ProductType from "../pages/Product/pages/ProductType";
import ProductMeasure from "../pages/Product/pages/Measure";
import CreateProduct from "../pages/Product/pages/CreateProduct";

function Router() {
  return (
    <Routes>
      <Route index path="/*" element={<Navigate to="/404" />} />
      <Route path="regions" element={<Outlet />}>
        <Route index element={<Regions />} />
        <Route path="type" element={<RegionsType />} />
        <Route path=":id/:name" element={<Outlet />}>
          <Route index element={<Subcategory />} />
          <Route index path=":subid/:title" element={<FinalCategory />} />
        </Route>
      </Route>
      <Route path="quiz" element={<Outlet />}>
        <Route index element={<Quiz />} />
        <Route path="type" element={<QuizType />} />
        <Route path=":id" element={<Outlet />}>
          <Route index element={<QuizSubcategory />} />
          <Route index path=":subid" element={<QuizFinalCategory />} />
        </Route>
      </Route>
      <Route path="products" element={<Outlet />}>
        <Route index element={<Product />} />
        <Route path="measure" element={<ProductMeasure />} />
        <Route path="type" element={<ProductType />} />
        <Route path="create" element={<CreateProduct />} />
        <Route path=":id/:name" element={<Outlet />}>
          <Route index element={<ProductsSubCategory />} />
          <Route
            index
            path=":subid/:title"
            element={<ProductFinalCategory />}
          />
        </Route>
      </Route>
      <Route path="orders-status" element={<OrdersStatus />} />
    </Routes>
  );
}

export default Router;
