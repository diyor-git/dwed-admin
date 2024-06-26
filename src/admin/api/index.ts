import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../_api/axiosBaseQuery.ts";

const token = localStorage.getItem("accessToken");

const adminCreatedApi = createApi({
  reducerPath: "adminCreatedApi",
  baseQuery: axiosBaseQuery({
    Authorization: `Bearer ${token}`,
  }),
  tagTypes: [
    "Regions",
    "RegionsType",
    "Quiz",
    "QuizType",
    "Products",
    "ProductsMeasure",
    "ProductsCategory",
    "ProductsType",
    "ProductsManufacture",
    "OrderStatus",
  ],
  endpoints: () => ({}),
});

export default adminCreatedApi;
