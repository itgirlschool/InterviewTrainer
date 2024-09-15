import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userChoice: [],
  hasSelectedAnswer: false,
  selectedAnswer: null,
  hasAnswered: false,
  showCorrectAnswer: false,
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
    setHasSelectedAnswer: state => {
      state.hasSelectedAnswer = true;
    },
    clearHasSelectedAnswer: state => {
      state.hasSelectedAnswer = false;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    clearSelectedAnswer: state => {
      state.selectedAnswer = null;
    },
    setHasAnswered: state => {
      state.hasAnswered = true;
    },
    clearHasAnswered: state => {
      state.hasAnswered = false;
    },
    setShowCorrectAnswer: state => {
      state.showCorrectAnswer = true;
    },
    clearShowCorrectAnswer: state => {
      state.showCorrectAnswer = false;
    },
  },
});

export const {
  addUserChoice,
  clearUserChoice,
  setHasSelectedAnswer,
  clearHasSelectedAnswer,
  setSelectedAnswer,
  clearSelectedAnswer,
  setHasAnswered,
  clearHasAnswered,
  setShowCorrectAnswer,
  clearShowCorrectAnswer,
} = UserAutoTestsSlice.actions;
export const userAutoTestsReducer =
  UserAutoTestsSlice.reducer;
