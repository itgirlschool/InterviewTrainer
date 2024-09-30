import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTests = createAsyncThunk(
  "autotests/fetchTests",
  async () => {
    const response = await fetch("/autotests.json");

    if (!response.ok) {
      throw new Error("Failed to fetch tests");
    }

    const data = await response.json();
    return data;
  },
);
