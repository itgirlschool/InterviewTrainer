import { createSlice } from "@reduxjs/toolkit";
import tasks from "../../../data/tasks.json";
import { checkSolution } from "../../../Services/checkSolution";

const initialState = {
  tasks: tasks,
  currentTaskIndex: 0,
  showHint: false,
  userSolution: "",
  showSolution: false,
  isCorrect: null,
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setUserSolution: (state, action) => {
      state.userSolution = action.payload;
    },
    toggleHint: (state) => {
      state.showHint = !state.showHint;
    },
    toggleSolution: (state) => {
      state.showSolution = !state.showSolution;
    },
    nextTask: (state) => {
      if (state.currentTaskIndex <= state.tasks.length - 1) {
        state.currentTaskIndex += 1;
        state.userSolution = "";
        state.showHint = false;
        state.showSolution = false;
        state.isCorrect = null;
        state.error = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkSolution.pending, (state) => {
        state.isLoading = true;
        state.isCorrect = null;
        state.error = null;
      })
      .addCase(checkSolution.fulfilled, (state, action) => {
        state.isCorrect = action.payload;
        state.isLoading = false;
      })
      .addCase(checkSolution.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setUserSolution, toggleHint, toggleSolution, nextTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;