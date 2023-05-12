import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../_api/axiosBaseQuery.ts";

const authCreatedApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({
    baseUrl: ``,
  }),
  tagTypes: ["Users", "User"],
  endpoints: () => ({}),
});

export default authCreatedApi;
