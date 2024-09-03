import { createSlice } from "@reduxjs/toolkit";
import { fetchTests } from "../../../Services/fetchTests";

const initialState = {
  tests: [],
  status: "idle", //"loading", "succeeded", "failed"
  error: null,
};

export const AutoTestsSlice = createSlice({
  name: "autotests",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTests.pending, state => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTests.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.tests = action.payload;
      })
      .addCase(fetchTests.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const autotestsReducer = AutoTestsSlice.reducer;
