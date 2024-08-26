import { createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "../../../Services/fetchVideos";

const initialState = {
  videos: [],
  status: "idle", //"loading", "succeeded", "failed"
  error: null,
};

export const VideosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchVideos.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const videosReducer = VideosSlice.reducer;
