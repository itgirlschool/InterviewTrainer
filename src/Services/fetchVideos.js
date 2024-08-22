import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/videos",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
