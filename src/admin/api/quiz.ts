import regionsCreatedApi from "./index.ts";

export const quizApi = regionsCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    getQuiz: build.query({
      query: ({ offset }: any) => ({
        url: `/QMS/api/v1.0/public/quiz/?limit=10&offset=${offset}`,
      }),
      providesTags: ["Quiz"],
    }),
    createQuizType: build.mutation({
      query: ({ name }: any) => ({
        url: `/QMS/api/v1.0/public/quiz`,
        method: "POST",
        data: { name },
      }),
    }),
  }),
});

export const { useGetQuizQuery, useCreateQuizTypeMutation } = quizApi;
