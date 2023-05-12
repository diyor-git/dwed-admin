import authCreatedApi from "./index.ts";

export const authApi = authCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: ({ login, password, ipAddress }: any) => ({
        url: "/UMS/api/v1.0/business/accounts",
        method: "POST",
        data: { login, password, ipAddress },
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;
