import { createApi } from "@reduxjs/toolkit/query";
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
