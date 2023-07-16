import regionsCreatedApi from "./index.ts";

export const productsApi = regionsCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ offset, search, limit = 10 }: any) => ({
        url: `/PMS/api/v1.0/admin/product_category/`,
        params: { limit, offset, search },
      }),
      providesTags: ["Products"],
    }),
    getProductsSub: build.query({
      query: ({ offset, search, limit = 10, id }: any) => ({
        url: `/PMS/api/v1.0/admin/product_category/`,
        params: { parent: id, limit, offset, search },
      }),
      providesTags: ["Products"],
    }),
    getProductsFinal: build.query({
      query: ({ offset, search, limit = 10, id }: any) => ({
        url: `/PMS/api/v1.0/admin/product_category/`,
        params: { parent: id, limit, offset, search },
      }),
      providesTags: ["Products"],
    }),
    getProductsType: build.query({
      query: ({ offset, limit = 10, search }: any) => ({
        url: `/PMS/api/v1.0/admin/product_type/`,
        params: { limit, offset, search },
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
        url: `/PMS/api/v1.0/admin/product_unit/`,
        params: { limit, offset, search },
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
      query: ({ limit = 10, offset, search }) => ({
        url: `/PMS/api/v1.0/admin/manufacturer/`,
        params: { offset, limit, search },
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
