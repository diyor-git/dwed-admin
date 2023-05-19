import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../_api/axiosBaseQuery.ts";

const token = localStorage.getItem("accessToken");

const regionsCreatedApi = createApi({
  reducerPath: "regionsCreatedApi",
  baseQuery: axiosBaseQuery({
    Authorization: `Bearer ${token}`,
  }),
  tagTypes: ["Regions", "RegionsType"],
  endpoints: () => ({}),
});

export default regionsCreatedApi;
