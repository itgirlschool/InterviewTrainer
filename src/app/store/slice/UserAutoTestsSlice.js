import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice для управления действиями пользовательницы и прогрессом в автоматизированных тестах.
 * Отвечает за выбранные пользовательницей ответы, прогресс и количество правильных ответов.
 *
 * @typedef {Object} State
 * @property {Array<{ testId: number, answerId: number }>} userChoice - Массив выбранных пользовательницей ответов.
 * @property {boolean} hasSelectedAnswer - Булевое значение, указывает на то, выбрала ли пользовательница ответ.
 * @property {number|null} selectedAnswer - ID выбранного ответа.
 * @property {boolean} hasAnswered - Булевое значение, указывает на то, ответила ли пользовательница на вопрос (нажала ли на кнопку "ответить")
 * @property {boolean} showCorrectAnswer - Булевое значение, отвечает за то, показать ли правильный ответ пользовательнице.
 * @property {number} correctAnswersCount - Количество правильных ответов пользовательницы.
 * @property {Object} userProgress - Прогресс пользовательницы в тестах.
 * @property {number} userProgress.testsDone - Количество выполненных тестов.
 * @property {number} userProgress.correctAnswers - Количество правильных ответов.
 */

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
    //Добавляет выбор пользовательницы в стейт
    addUserChoice: (state, action) => {
      const { testId, answerId } = action.payload;
      state.userChoice.push({ testId, answerId });
    },
    //Очищает выбор пользовательницы, возвращая состояние к начальному.
    clearUserChoice: () => {
      return initialState;
    },
    //Устанавливает статус выбора ответа.
    setHasSelectedAnswer: (state, action) => {
      state.hasSelectedAnswer = action.payload;
    },
    //Устанавливает ID выбранного ответа.
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    //Очищает выбранный ответ.
    clearSelectedAnswer: state => {
      state.selectedAnswer = null;
    },
    //Устанавливает статус, что пользовательница ответила на вопрос.
    setHasAnswered: (state, action) => {
      state.hasAnswered = action.payload;
    },
    //Устанавливает, нужно ли показывать правильный ответ.
    setShowCorrectAnswer: (state, action) => {
      state.showCorrectAnswer = action.payload;
    },
    //Устанавливает прогресс пользовательницы в прохождении количества тестов.
    setUserProgress: (state, action) => {
      state.userProgress = action.payload;
    },
    //Рассчитывает количество правильных ответов пользовательницы.
    calculateCorrectAnswers: (state, action) => {
      const correctAnswers = action.payload;
      state.correctAnswersCount = state.userChoice.reduce((count, userAnswer) => {
        const correctAnswer = correctAnswers.find(
          answer => answer.testId === userAnswer.testId,
        )?.answerId;
        return count + (userAnswer.answerId === correctAnswer ? 1 : 0);
      }, 0);
    },
    //Рассчитывает полный прогресс пользовательницы на основе пройденных тестов и правильных ответов.
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
