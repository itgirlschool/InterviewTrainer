import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInterviews = createAsyncThunk(
  "interviews/fetchInterviews",
  async () => {
    const response = await fetch("/interviews.json");

    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }

    const data = await response.json();
    return data;
  },
);
