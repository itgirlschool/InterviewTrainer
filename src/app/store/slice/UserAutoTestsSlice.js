import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userChoice: [],
  hasSelectedAnswer: false,
  selectedAnswer: null,
  hasAnswered: false,
};

export const UserAutoTestsSlice = createSlice({
  name: "userAutoTests",
  initialState,
  reducers: {
    addUserChoice: (state, action) => {
      const { testId, answerId } = action.payload;
      console.log("from slice", testId, answerId);
      state.userChoice.push({ testId, answerId });
      console.log(
        "User Choice Updated: ",
        JSON.stringify(state.userChoice),
      );
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
} = UserAutoTestsSlice.actions;
export const userAutoTestsReducer =
  UserAutoTestsSlice.reducer;
