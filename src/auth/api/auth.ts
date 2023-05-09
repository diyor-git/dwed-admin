import authCreatedApi from "./index.ts";

export const authApi = authCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: ({ login, password, ipAddress }: any) => ({
        url: "/auth/signin",
        method: "POST",
        data: { login, password, ipAddress },
      }),
    }),
    signUp: build.mutation({
      query: ({ login, password, ipAddress }: any) => ({
        url: "/auth/signin",
        method: "POST",
        data: { login, password, ipAddress },
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
