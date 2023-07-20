import regionsCreatedApi from "./index.ts";

export const regionsApi = regionsCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    getRegions: build.query({
      query: ({ offset, search, parent }: any) => ({
        url: `/GMS/api/v1.0/admin/region/`,
        params: { parent, limit: 10, offset, search },
      }),
      providesTags: ["Regions"],
    }),
    addRegion: build.mutation({
      query: ({ categoryName, regionType }: any) => ({
        url: `/GMS/api/v1.0/admin/region`,
        method: "POST",
        data: { name: categoryName, type: regionType },
      }),
      invalidatesTags: ["Regions"],
    }),
    deleteRegion: build.mutation({
      query: ({ id }: any) => ({
        url: `/GMS/api/v1.0/admin/region/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Regions"],
    }),
    createRegion: build.mutation({
      query: ({ name, status, parent, type }: any) => {
        const data: any = { name, status, type };
        if (parent !== undefined) {
          data.parent = parent;
        }
        return {
          url: `/GMS/api/v1.0/admin/region/`,
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["Regions"],
    }),
    createRegionsType: build.mutation({
      query: ({ name, status }: any) => ({
        url: `/GMS/api/v1.0/admin/region_type/`,
        method: "POST",
        data: { name, status },
      }),
      invalidatesTags: ["RegionsType"],
    }),
    deleteRegionsType: build.mutation({
      query: ({ id }: any) => ({
        url: `/GMS/api/v1.0/admin/region_type/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["RegionsType"],
    }),
    getRegionsType: build.query({
      query: ({ offset, search }: any) => ({
        url: `/GMS/api/v1.0/admin/region_type/`,
        params: { limit: 10, offset, search },
      }),
      providesTags: ["RegionsType"],
    }),
  }),
});

export const {
  useGetRegionsQuery,
  useDeleteRegionMutation,
  useGetRegionsTypeQuery,
  useCreateRegionsTypeMutation,
  useCreateRegionMutation,
  useDeleteRegionsTypeMutation,
} = regionsApi;
