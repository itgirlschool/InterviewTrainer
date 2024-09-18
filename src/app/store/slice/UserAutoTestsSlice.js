import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userChoice: [],
  hasSelectedAnswer: false,
  selectedAnswer: null,
  hasAnswered: false,
  showCorrectAnswer: false,
  userProgress: null,
  correctAnswersCount: 0,
  userProgress: {},
};

export const UserAutoTestsSlice = createSlice({
  name: "userAutoTests",
  initialState,
  reducers: {
    addUserChoice: (state, action) => {
      const { testId, answerId } = action.payload;
      state.userChoice.push({ testId, answerId });
    },
    clearUserChoice: () => {
      return initialState;
    },
    setHasSelectedAnswer: (state, action) => {
      state.hasSelectedAnswer = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    clearSelectedAnswer: state => {
      state.selectedAnswer = null;
    },
    setHasAnswered: (state, action) => {
      state.hasAnswered = action.payload;
    },
    setShowCorrectAnswer: (state, action) => {
      state.showCorrectAnswer = action.payload;
    },
    setUserProgress: (state, action) => {
      state.userProgress = action.payload;
    },
    calculateCorrectAnswers: (state, action) => {
      state.correctAnswersCount = action.payload;
    },
    calculateUserProgress: state => {
      const testsDone = state.userProgress;
      const correctAnswers = state.correctAnswersCount;
      state.userProgress = { testsDone, correctAnswers };
    },
  },
});

export const {
  addUserChoice,
  clearUserChoice,
  setHasSelectedAnswer,
  setSelectedAnswer,
  clearSelectedAnswer,
  setHasAnswered,
  setShowCorrectAnswer,
  setUserProgress,
  calculateCorrectAnswers,
  calculateUserProgress,
} = UserAutoTestsSlice.actions;
export const userAutoTestsReducer = UserAutoTestsSlice.reducer;
