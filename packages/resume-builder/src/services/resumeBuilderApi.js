import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let baseUrl = window.location.origin;

const dynamicBaseQuery = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  });
  return baseQuery(args, api, extraOptions);
};

export const resumeBuilderApi = createApi({
  reducerPath: 'resumeBuilderApi',
  baseQuery: dynamicBaseQuery,
  tagTypes: ['ResumeLink'],
  endpoints: (builder) => ({
    updateResumeDetails: builder.mutation({
      query: ({ resumeId, payload }) => ({
        url: `/api/v3/user-resumes/${resumeId}/`,
        method: 'PUT',
        body: payload,
      }),
      invalidatesTags: ['ResumeLink'],
    }),
    getResumeLink: builder.query({
      query: ({ resumeId }) => ({
        url: `/api/v3/user-resumes/${resumeId}/download`,
        method: 'GET',
      }),
      providesTags: (result, error, { resumeId }) => [
        { type: 'ResumeLink', id: resumeId },
      ],
    }),
  }),
});

export const setBaseUrl = (url) => {
  if (url !== baseUrl) {
    baseUrl = url;
  }
};

export const { useUpdateResumeDetailsMutation, useGetResumeLinkQuery } =
  resumeBuilderApi;

export default resumeBuilderApi;
