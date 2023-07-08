import authCreatedApi from "./index.ts";

type LoginType = {
  username: string;
  password: string;
};
export const authApi = authCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: ({ username, password }: LoginType) => ({
        url: "/UMS/api/v1.0/account/auth/?login_params=username_password",
        method: "POST",
        data: { username, password },
      }),
    }),
    account: build.query({
      query: ({ token }: any) => ({
        url: "/UMS/api/v1.0/account/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useSignInMutation, useAccountQuery } = authApi;
