// eslint-disable-next-line import/no-extraneous-dependencies
import { createApi } from "@reduxjs/toolkit/query";
// eslint-disable-next-line import/extensions
import axiosBaseQuery from "./axiosBaseQuery";

const token = localStorage.getItem("accessToken");
const generalCreatedApi = createApi({
  reducerPath: "generalApi",
  baseQuery: axiosBaseQuery({
    Authorization: `Bearer ${token}`,
  }),
  endpoints: () => ({}),
});

export default generalCreatedApi;
