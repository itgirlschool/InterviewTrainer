import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const videosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: builder => ({
    getVideos: builder.query({
      query: () => "videos",
    }),
  }),
});

export const { useGetVideosQuery } = videosApi;
