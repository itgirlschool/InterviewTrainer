import "../Card.scss";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHasSelectedAnswer,
  setSelectedAnswer,
} from "../../../app/store/slice/UserAutoTestsSlice";
import findCorrectAnswer from "../../../common/helpers/findCorrectAnswer";

export default function Radio({ answer, testId }) {
  const dispatch = useDispatch();
  const hasAnswered = useSelector(state => state.userAutoTests.hasAnswered);
  const showCorrectAnswer = useSelector(state => state.userAutoTests.showCorrectAnswer);
  const userChoice = useSelector(state => state.userAutoTests.userChoice);
  const correctAnswers = useSelector(state => state.autoTests.correctAnswers);

  const handleChange = useCallback(() => {
    dispatch(setSelectedAnswer(answer.id));
    dispatch(setHasSelectedAnswer(true));
  }, [testId, dispatch]);

  const userAnswer = findCorrectAnswer(userChoice, testId);
  const correctAnswer = findCorrectAnswer(correctAnswers, testId);

  const handleAnswerColor = () => {
    if (!showCorrectAnswer) return "radio empty";
    if (showCorrectAnswer && answer.id === userAnswer && userAnswer !== correctAnswer)
      return "red-img";
    if (showCorrectAnswer && answer.id === correctAnswer) return "green-img";
    if (showCorrectAnswer && answer.id !== correctAnswer && answer.id !== userAnswer)
      return "radio empty";
  };

  return (
    <div key={answer.id} className="test__answer">
      <input
        type="radio"
        name={`testAnswer-${testId}`}
        id={answer.id}
        className={handleAnswerColor()}
        onChange={handleChange}
        disabled={hasAnswered}
      />
      <label htmlFor={answer.id}>{answer.text}</label>
    </div>
  );
}
