import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/videos",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const middlewareVideos = store => next => action => {
  if (action.type === fetchVideos.pending.type) {
    console.log("Fetching videos...");
  }
  if (action.type === fetchVideos.fulfilled.type) {
    console.log(
      "Videos fetched successfully:",
      action.payload,
    );
  }
  if (action.type === fetchVideos.rejected.type) {
    console.error("Failed to fetch videos:", action.error);
  }
  return next(action);
};

export default middlewareVideos;
