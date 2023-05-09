import { useLocation } from "react-router-dom";

/**
 * return all search parameters
 * @returns object
 */
function useGetParameters() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return Object.fromEntries(query.entries());
}

export default useGetParameters;
