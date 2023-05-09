import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAllowed, redirectPath = "/auth", children }: any) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
}

export default ProtectedRoute;
