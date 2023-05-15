import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../auth/api/auth.ts";

function useAuth() {
  const navigate = useNavigate();
  const [signInData, { data, error, isSuccess, isLoading }] =
    useSignInMutation();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      navigate("/admin/regions");
    }
  }, [isSuccess]);

  return {
    signInData,
    error,
    isLoading,
    isSuccess,
  };
}

export default useAuth;
