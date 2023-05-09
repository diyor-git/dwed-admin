import { useEffect, useMemo, useState } from "react";
import useGetParameters from "../../../_utils/hooks/useGetParameters.ts";

let timeout = 0;

function useGetPopupState() {
  const { popup } = useGetParameters();
  const [mountedPopup, setMountedPopup] = useState<any>(popup);

  useEffect(() => {
    if (popup) {
      if (timeout) clearTimeout(timeout);
      setMountedPopup(popup);
    } else {
      timeout = setTimeout(() => {
        setMountedPopup(null);
      }, 300);
    }
  }, [popup]);

  useEffect(
    () => () => {
      if (timeout) clearTimeout(timeout);
    },
    []
  );

  const isOpened = useMemo(() => !!popup, [popup]);

  return {
    mountedPopup,
    isOpened,
  };
}

export default useGetPopupState;
