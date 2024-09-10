import { createSlice } from "@reduxjs/toolkit";
import tasks from "../../../data/tasks.json"

const initialState = {
  tasks: tasks,
  currentTaskIndex: 0,
  showHint: false,
  userSolution: '',
  showSolution: false,
  isCorrect: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
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
    checkSolution: (state) => {
      // TODO Продумать и сделать логику проверки
      const userFunc = state.userSolution;
      const isCorrect = userFunc === "1"; // Проверку реализовать здесь
      state.isCorrect = isCorrect;
    },
    nextTask: (state) => {
      if (state.currentTaskIndex < state.tasks.length - 1) {
        state.currentTaskIndex += 1;
        state.userSolution = '';
        state.showHint = false;
        state.showSolution = false;
        state.isCorrect = false;
      }
    },
  },
});

export const { setUserSolution, toggleHint, toggleSolution, showSolution, checkSolution, nextTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;