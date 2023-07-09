import regionsCreatedApi from "./index.ts";

export const productsApi = regionsCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ offset, search, limit = 10 }: any) => ({
        url: `/PMS/api/v1.0/admin/product_category/?limit=${limit}&offset=${offset}&search=${search}`,
      }),
      providesTags: ["Products"],
    }),
    getProductsSub: build.query({
      query: ({ offset, search, limit = 10, id }: any) => ({
        url: `/PMS/api/v1.0/admin/product_category/?parent=${id}&limit=${limit}&offset=${offset}&search=${search}`,
      }),
      providesTags: ["Products"],
    }),
    getProductsFinal: build.query({
      query: ({ offset, search, limit = 10, id }: any) => ({
        url: `/PMS/api/v1.0/admin/product_category/?parent=${id}&limit=${limit}&offset=${offset}&search=${search}`,
      }),
      providesTags: ["Products"],
    }),
    getProductsType: build.query({
      query: ({ offset, limit = 10 }: any) => ({
        url: `/PMS/api/v1.0/admin/product_type/?limit=${limit}&offset=${offset}&search=`,
      }),
      providesTags: ["Products"],
    }),
    getProductsCategory: build.query({
      query: ({ limit = 10 }) => ({
        url: `/PMS/api/v1.0/admin/product_category/?limit=${limit}`,
      }),
      providesTags: ["Products"],
    }),
    deleteProduct: build.mutation({
      query: ({ id }: any) => ({
        url: `/PMS/api/v1.0/admin/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    createProduct: build.mutation({
      query: ({
        bar_code,
        category,
        categoryOfCategory,
        description,
        ipAddress,
        manufacturer,
        name,
        offerId,
        status,
        type,
        unit,
      }: any) => ({
        url: `/PMS/api/v1.0/admin/product/`,
        method: "POST",
        data: {
          bar_code,
          category,
          categoryOfCategory,
          description,
          ipAddress,
          manufacturer,
          name,
          offerId,
          status,
          type,
          unit,
        },
      }),
      invalidatesTags: ["Products"],
    }),
    getProductsMeasure: build.query({
      query: ({ search = "", offset = "", limit = 10 }) => ({
        url: `/PMS/api/v1.0/admin/product_unit/?limit=${limit}&offset=${offset}&search=${search}`,
      }),
      providesTags: ["ProductsMeasure"],
    }),
    createProductsMeasure: build.mutation({
      query: ({ name }) => ({
        url: `/PMS/api/v1.0/admin/product_unit/`,
        method: "POST",
        data: { name },
      }),
      invalidatesTags: ["ProductsMeasure"],
    }),
    getProductsManufacture: build.query({
      query: ({ limit = 10 }) => ({
        url: `/PMS/api/v1.0/admin/manufacturer/?limit=${limit}`,
      }),
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useCreateProductsMeasureMutation,
  useGetProductsFinalQuery,
  useGetProductsManufactureQuery,
  useGetProductsTypeQuery,
  useGetProductsCategoryQuery,
  useGetProductsMeasureQuery,
  useGetProductsSubQuery,
} = productsApi;
