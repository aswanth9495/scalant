import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let baseUrl = 'http://localhost:3000';

export const setBaseUrl = (url) => {
  baseUrl = url;
};

export const resumeBuilderApi = createApi({
  reducerPath: 'resumeBuilderApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    updateResumeDetails: builder.mutation({
      query: ({ formStage, payload }) => ({
        url: `/api/resume/${formStage}`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useUpdateResumeDetailsMutation } = resumeBuilderApi;
