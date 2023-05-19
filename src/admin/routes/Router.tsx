import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Regions from "../pages/Regions";
import Subcategory from "../pages/Regions/pages/Subcategory";
import FinalCategory from "../pages/Regions/pages/FinalCategory";
import RegionsType from "../pages/Regions/pages/RegionsType";
import Quiz from "../pages/Quiz";
import QuizType from "../pages/Quiz/pages/QuizType";
import QuizSubcategory from "../pages/Quiz/pages/QuizSubcategory";
import QuizFinalCategory from "../pages/Quiz/pages/QuizFinalCategory";

function Router() {
  return (
    <Routes>
      <Route index path="/*" element={<Navigate to="/404" />} />
      <Route path="regions" element={<Outlet />}>
        <Route index element={<Regions />} />
        <Route path="type" element={<RegionsType />} />
        <Route path=":id/:name" element={<Outlet />}>
          <Route index element={<Subcategory />} />
          <Route index path=":subid/:subname" element={<FinalCategory />} />
        </Route>
      </Route>
      <Route path="quiz" element={<Outlet />}>
        <Route index element={<Quiz />} />
        <Route path="type" element={<QuizType />} />
        <Route path=":id/:name" element={<Outlet />}>
          <Route index element={<QuizSubcategory />} />
          <Route index path=":subid/:subname" element={<QuizFinalCategory />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
