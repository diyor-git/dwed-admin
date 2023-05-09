import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Page404, PageError } from "./_components";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const Auth = lazy(() => import("./auth"));
const Admin = lazy(() => import("./admin"));

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route index path="/*" element={<Navigate to="/404" />} />
        <Route index path="/404" element={<Page404 />} />
        <Route index path="/error/:status" element={<PageError />} />
        <Route index element={<Navigate to="/auth/login" />} />
        <Route
          path="/auth/*"
          element={
            <Suspense fallback={<h1>load</h1>}>
              <Auth />
            </Suspense>
          }
        />
        <Route
          path="/admin/*"
          element={
            <Suspense fallback={<h1>load</h1>}>
              <Admin />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
