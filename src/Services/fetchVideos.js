import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async () => {
    const response = await fetch("/videos.json");

    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }

    const data = await response.json();
    return data;
  },
);
