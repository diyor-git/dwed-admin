import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../_api/axiosBaseQuery.ts";

const authCreatedApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({
    baseUrl: `/api/v1`,
  }),
  tagTypes: ["Users", "User"],
  endpoints: () => ({}),
});

export default authCreatedApi;
