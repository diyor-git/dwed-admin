import useGetPopupState from "./_hooks/useGetPopupState";

// @ts-ignore
function PopupsController({ popups }): any {
  const { mountedPopup, isOpened } = useGetPopupState();
  const Component = popups[mountedPopup];

  if (!Component) {
    return null;
  }

  return <Component isOpened={isOpened} />;
}

export default PopupsController;
