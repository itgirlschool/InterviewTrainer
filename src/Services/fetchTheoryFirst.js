import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTheoryFirst = createAsyncThunk(
  "theoryFirst/fetchTheoryFirst",
  async () => {
    const response = await fetch("/theoryFirst.json");
    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }
    const data = await response.json();
    return data;
  },
);
