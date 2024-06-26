import regionsCreatedApi from "./index.ts";

export const orderstatusApi = regionsCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    getOrderStatus: build.query({
      query: ({ offset, search }: any) => ({
        url: `/OMS/api/v1.0/admin/flow/`,
        params: { offset, search, limit: 10 },
      }),
      providesTags: ["OrderStatus"],
    }),
    createOrderStatus: build.mutation({
      query: (formData: any) => ({
        url: `/OMS/api/v1.0/admin/flow/`,
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: ["OrderStatus"],
    }),
    deleteOrderStatus: build.mutation({
      query: ({ id }: any) => ({
        url: `/OMS/api/v1.0/admin/flow/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["OrderStatus"],
    }),
  }),
});

export const {
  useGetOrderStatusQuery,
  useCreateOrderStatusMutation,
  useDeleteOrderStatusMutation,
} = orderstatusApi;
