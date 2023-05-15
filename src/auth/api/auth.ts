import authCreatedApi from "./index.ts";

type LoginType = {
  username: string;
  password: string;
}
export const authApi = authCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: ({ username, password }: LoginType) => ({
        url: "/UMS/api/v1.0/account/auth/?login_params=username_password",
        method: "POST",
        data: { username, password },
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;
