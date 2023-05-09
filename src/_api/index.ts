// eslint-disable-next-line import/no-extraneous-dependencies
import { createApi } from "@reduxjs/toolkit/query";
// eslint-disable-next-line import/extensions
import axiosBaseQuery from "./axiosBaseQuery";

const generalCreatedApi = createApi({
  reducerPath: "generalApi",
  baseQuery: axiosBaseQuery({
    baseUrl: `/api/v1`,
  }),
  endpoints: () => ({}),
});

export default generalCreatedApi;
