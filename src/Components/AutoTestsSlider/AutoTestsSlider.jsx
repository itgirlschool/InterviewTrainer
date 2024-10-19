import "./AutoTestsSlider.scss";
import catPicTests from "../../assets/images/cat_page_autotests.svg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TestCard from "../TestCards/TestCard";
import {
  addUserChoice,
  setHasSelectedAnswer,
  clearSelectedAnswer,
  setHasAnswered,
  setShowCorrectAnswer,
  clearUserChoice,
  setUserProgress,
  calculateCorrectAnswers,
  calculateUserProgress,
} from "../../app/store/slice/UserAutoTestsSlice";
import calcCorrectAnswers from "../../common/helpers/calcCorrectAnswers.js"

export default function AutoTestsSlider() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tests = useSelector(state => state.autoTests.tests);
  const hasSelectedAnswer = useSelector(state => state.userAutoTests.hasSelectedAnswer);
  const selectedAnswer = useSelector(state => state.userAutoTests.selectedAnswer);
  const hasAnswered = useSelector(state => state.userAutoTests.hasAnswered);
  const correctAnswers = useSelector(state => state.autoTests.correctAnswers);
  const userChoice = useSelector(state => state.userAutoTests.userChoice);
  const { id } = useParams();
  const currentTest = parseInt(id, 10);

  useEffect(() => {
    dispatch(clearUserChoice());
  }, []);

  useEffect(() => {
    dispatch(setHasSelectedAnswer(false));
    dispatch(setHasAnswered(false));
    dispatch(setShowCorrectAnswer(false));
    dispatch(clearSelectedAnswer());
  }, [id]);

  useEffect(() => {
    dispatch(calculateCorrectAnswers(calcCorrectAnswers(correctAnswers, userChoice)));
  }, [correctAnswers, userChoice]);

  const handleChoice = () => {
    dispatch(
      addUserChoice({
        testId: currentTest,
        answerId: selectedAnswer,
      }),
    );
    dispatch(setHasAnswered(true));
    dispatch(setShowCorrectAnswer(true));
    dispatch(setUserProgress(currentTest));
    dispatch(calculateUserProgress());
  };

  const handleNext = () => {
    if (currentTest < tests.length) {
      navigate(`/gradingfirst/testsfirst/${currentTest + 1}`);
    }
  };

  const handleShowResults = () => {
    navigate("/gradingfirst/testsfirst/testsresults");
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
    <button className="slider__button" onClick={handleShowResults}>
      Показать результаты
    </button>
  );

  return (
    <>
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
      <div className="catImg">
        <img src={catPicTests} alt="cat" />
      </div>
    </>
  );
}
