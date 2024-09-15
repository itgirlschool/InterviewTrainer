import { createSlice } from "@reduxjs/toolkit";
import { fetchTheoryFirst } from "../../../Services/fetchTheoryFirst";
const initialState = {
  theoryFirst: [],
  status: "idle", //"loading", "succeeded", "failed"
  error: null,
};
export const TheoryFirstSlice = createSlice({
  name: "theoryFirst",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        fetchTheoryFirst.pending,
        (state, action) => {
          state.status = "loading";
          state.error = null;
        },
      )
      .addCase(
        fetchTheoryFirst.fulfilled,
        (state, action) => {
          state.status = "succeeded";
          state.error = null;
          state.theoryFirst = action.payload;
        },
      )
      .addCase(
        fetchTheoryFirst.rejected,
        (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        },
      );
  },
});
export const theoryFirstReducer = TheoryFirstSlice.reducer;
