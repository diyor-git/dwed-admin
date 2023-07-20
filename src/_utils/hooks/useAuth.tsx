import { useEffect } from "react";
import { useSignInMutation } from "../../auth/api/auth.ts";

function useAuth() {
  const [signInData, { data, error, isSuccess, isLoading }] =
    useSignInMutation();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("refreshToken", data.refresh);
      localStorage.setItem("accessToken", data.access);
      setTimeout(() => {
        window.location.reload();
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
