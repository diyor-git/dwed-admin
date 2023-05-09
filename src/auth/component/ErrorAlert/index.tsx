import { toast } from "react-toastify";

function ErrorAlert({ error }: any) {
  if (!error) return null;

  const { data } = error;
  toast.error(data, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
  return <></>;
}

export default ErrorAlert;
