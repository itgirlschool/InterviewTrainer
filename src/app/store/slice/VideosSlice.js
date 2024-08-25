import { createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "../../../Services/fetchVideos";
import db from "../../../db.json";

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
        state.videos = db.videos; //на случай недееспособности мок-сервера
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.videos = db.videos; //на случай недееспособности мок-сервера
      });
  },
});

export const videosReducer = VideosSlice.reducer;
