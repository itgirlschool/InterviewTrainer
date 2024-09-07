import { createSlice } from "@reduxjs/toolkit";
import { fetchInterviews } from "../../../Services/fetchInterviews";

const initialState = {
  interviews: [],
  status: "idle", //"loading", "succeeded", "failed"
  error: null,
};

export const InterviewsSlice = createSlice({
  name: "interviews",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchInterviews.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchInterviews.fulfilled,
        (state, action) => {
          state.status = "succeeded";
          state.error = null;
          state.videos = action.payload;
        },
      )
      .addCase(
        fetchInterviews.rejected,
        (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        },
      );
  },
});

export const inerviewsReducer = InterviewsSlice.reducer;
