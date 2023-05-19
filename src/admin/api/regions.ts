import regionsCreatedApi from "./index.ts";

export const regionsApi = regionsCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    getRegions: build.query({
      query: ({ offset }: any) => ({
        url: `/GMS/api/v1.0/admin/region/?limit=10&offset=${offset}`,
      }),
      providesTags: ["Regions"],
    }),
    getRegionsSub: build.query({
      query: ({ offset, id }: any) => ({
        url: `/GMS/api/v1.0/admin/region/?parent=${id}&limit=10&offset=${offset}`,
      }),
      providesTags: ["Regions"],
    }),
    getRegionsFinal: build.query({
      query: ({ offset, id }: any) => ({
        url: `/GMS/api/v1.0/admin/region/?parent=${id}&limit=10&offset=${offset}`,
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
    getRegionsType: build.query({
      query: ({ offset }: any) => ({
        url: `/GMS/api/v1.0/admin/region_type/?limit=10&offset=${offset}`,
      }),
      providesTags: ["RegionsType"],
    }),
    searchRegions: build.mutation({
      query: ({ search }: any) => ({
        url: `/GMS/api/v1.0/admin/region/?search=${search}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetRegionsQuery,
  useGetRegionsSubQuery,
  useDeleteRegionMutation,
  useGetRegionsTypeQuery,
  useSearchRegionsMutation,
  useGetRegionsFinalQuery,
} = regionsApi;
