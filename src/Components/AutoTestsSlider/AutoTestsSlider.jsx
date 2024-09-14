import "./AutoTestsSlider.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TestCard from "../TestCards/TestCard";
import { addUserChoice } from "../../app/store/slice/UserAutoTestsSlice";
import {
  clearHasSelectedAnswer,
  clearSelectedAnswer,
  setHasAnswered,
  clearHasAnswered,
} from "../../app/store/slice/UserAutoTestsSlice";

export default function AutoTestsSlider() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tests = useSelector(state => state.autotests.tests);
  const hasSelectedAnswer = useSelector(
    state => state.userAutoTests.hasSelectedAnswer,
  );
  const selectedAnswer = useSelector(
    state => state.userAutoTests.selectedAnswer,
  );
  const hasAnswered = useSelector(
    state => state.userAutoTests.hasAnswered,
  );
  const { id } = useParams();
  const currentTest = parseInt(id, 10);

  useEffect(() => {
    dispatch(clearHasSelectedAnswer());
    dispatch(clearSelectedAnswer());
    dispatch(clearHasAnswered());
  }, [id]);

  const handleChoice = () => {
    dispatch(
      addUserChoice({
        testId: currentTest,
        answerId: selectedAnswer,
      }),
    );
    dispatch(setHasAnswered());
  };

  const handleNext = () => {
    if (currentTest < tests.length) {
      navigate(
        `/gradingfirst/testsfirst/${currentTest + 1}`,
      );
    }
  };

  const buttonAnswer = (
    <button
      className="slider__button"
      disabled={!hasSelectedAnswer}
      onClick={handleChoice}
    >
      Ответить
    </button>
  );

  const buttonNext = (
    <button className="slider__button" onClick={handleNext}>
      Далее
    </button>
  );

  const buttonShowResults = (
    <button
      className="slider__button"
      // onClick={handleShowResults}
    >
      Показать результаты
    </button>
  );

  return (
    <div className="slider">
      <div className="slider__count">
        {id}/{tests.length}
      </div>
      <div className="slider__cardContainer">
        <div>
          <TestCard currentTest={currentTest} />
        </div>
        <div className="slider__buttons">
          {!hasAnswered
            ? buttonAnswer
            : currentTest < tests.length
            ? buttonNext
            : buttonShowResults}
        </div>
      </div>
    </div>
  );
}
