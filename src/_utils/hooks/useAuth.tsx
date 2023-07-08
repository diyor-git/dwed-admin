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
      setTimeout(() => {
        navigate("/admin/regions");
      }, 300);
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
