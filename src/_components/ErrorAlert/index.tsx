import { toast } from "react-toastify";

function ErrorAlert({ error }: any) {
  if (!error) return null;
  const { data } = error;

  if (typeof data === "object") {
    if (typeof data[0].message === "object") {
      toast.error(data[0].message[0], {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error(data[0].message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
    // eslint-disable-next-line consistent-return
    return;
  }
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
