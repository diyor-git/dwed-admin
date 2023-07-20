import regionsCreatedApi from "./index.ts";

export const quizApi = regionsCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    getQuiz: build.query({
      query: ({ offset, search, parent }: any) => ({
        url: `/QMS/api/v1.0/public/quiz/`,
        params: { parent, limit: 10, offset, search },
      }),
      providesTags: ["Quiz"],
    }),
    getQuizType: build.query({
      query: ({ offset, search }: any) => ({
        url: `/QMS/api/v1.0/public/category/`,
        params: { limit: 10, offset, search },
      }),
      providesTags: ["QuizType"],
    }),
    deleteQuiz: build.mutation({
      query: ({ id }: any) => ({
        url: `/QMS/api/v1.0/public/quiz/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quiz"],
    }),
    createQuizType: build.mutation({
      query: ({ name }: any) => ({
        url: `/QMS/api/v1.0/public/quiz/`,
        method: "POST",
        data: { name },
      }),
      invalidatesTags: ["QuizType"],
    }),
    deleteQuizType: build.mutation({
      query: ({ id }: any) => ({
        url: `/QMS/api/v1.0/public/quiz/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["QuizType"],
    }),
    createQuiz: build.mutation({
      query: (formData: any) => ({
        url: `/QMS/api/v1.0/public/quiz/`,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      }),
      invalidatesTags: ["Quiz"],
    }),
  }),
});

export const {
  useGetQuizQuery,
  useCreateQuizTypeMutation,
  useDeleteQuizMutation,
  useDeleteQuizTypeMutation,
  useGetQuizTypeQuery,
  useCreateQuizMutation,
} = quizApi;
