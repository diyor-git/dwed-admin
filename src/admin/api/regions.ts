import regionsCreatedApi from "./index.ts";

export const regionsApi = regionsCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    getRegions: build.query({
      query: ({ offset, search }: any) => ({
        url: `/GMS/api/v1.0/admin/region/?parent=0&limit=10&offset=${offset}&search=${search}`,
      }),
      providesTags: ["Regions"],
    }),
    getRegionsSub: build.query({
      query: ({ offset, id, search }: any) => ({
        url: `/GMS/api/v1.0/admin/region/?parent=${id}&limit=10&offset=${offset}&search=${search}`,
      }),
      providesTags: ["Regions"],
    }),
    getRegionsFinal: build.query({
      query: ({ offset, id, search }: any) => ({
        url: `/GMS/api/v1.0/admin/region/?parent=${id}&limit=10&offset=${offset}&search=${search}`,
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
      query: ({ name, status, parent, type }: any) => ({
        url: `/GMS/api/v1.0/admin/region/`,
        method: "POST",
        data: { name, status, parent: !parent ? 0 : parent, type },
      }),
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
        url: `/GMS/api/v1.0/admin/region_type/?limit=10&offset=${offset}&search=${search}`,
      }),
      providesTags: ["RegionsType"],
    }),
  }),
});

export const {
  useGetRegionsQuery,
  useGetRegionsSubQuery,
  useDeleteRegionMutation,
  useGetRegionsTypeQuery,
  useGetRegionsFinalQuery,
  useCreateRegionsTypeMutation,
  useCreateRegionMutation,
  useDeleteRegionsTypeMutation,
} = regionsApi;
