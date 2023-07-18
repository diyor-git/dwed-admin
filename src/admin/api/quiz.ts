import regionsCreatedApi from "./index.ts";

export const quizApi = regionsCreatedApi.injectEndpoints({
  endpoints: (build) => ({
    getQuiz: build.query({
      query: ({ offset, search, id }: any) => ({
        url: `/QMS/api/v1.0/public/quiz/`,
        params: { parent: id, limit: 10, offset, search },
      }),
      providesTags: ["Quiz"],
    }),
    getQuizCategory: build.query({
      query: ({ offset, search, id }: any) => ({
        url: `/QMS/api/v1.0/public/category/`,
        params: { parent: id, limit: 10, offset, search },
      }),
      providesTags: ["Quiz"],
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
  useGetQuizCategoryQuery,
  useCreateQuizMutation,
} = quizApi;
