import "./AutoTestsSlider.scss";
import catPicTests from "../../assets/images/cat_page_autotests.svg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
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
import { setUser } from "../../app/store/slice/UserAuthSlice";
import { updateUserProgress } from "../../Services/fbProgress";
import { updateProgress } from "../../common/helpers/progressUpdate";

export default function AutoTestsSlider() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tests = useSelector(state => state.autoTests.tests);
  const correctAnswers = useSelector(state => state.autoTests.correctAnswers);
  const { hasSelectedAnswer, selectedAnswer, hasAnswered, userChoice } = useSelector(
    state => state.userAutoTests,
  );
  const { id } = useParams();
  const currentTest = parseInt(id, 10);
  const { pathname } = useLocation();
  const [gradeName, blockName] = pathname.split("/").slice(1);
  const progressArray = useSelector(state => state.userAuth.progress);
  const userID = useSelector(state => state.userAuth.id);
  const currentUserData = useSelector(state => state.userAuth);
  const usersData = useSelector(state => state.users);
  const usersList = usersData.users;

  useEffect(() => {
    dispatch(clearUserChoice());
  }, []);

  useEffect(() => {
    dispatch(setHasSelectedAnswer(false));
    dispatch(setHasAnswered(false));
    dispatch(setShowCorrectAnswer(false));
    dispatch(clearSelectedAnswer());
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(calculateCorrectAnswers(calcCorrectAnswers(correctAnswers, userChoice)));
  }, [correctAnswers, userChoice, dispatch]);

  const handleChoice = async () => {
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
    const blockProgress = Number(
      parseFloat((currentTest / tests.length) * 100).toFixed(2),
    );

    const newProgress = updateProgress(progressArray, {
      gradeName,
      blockName,
      lastItem: currentTest,
      blockProgress,
    });
    const usersArray = Array.isArray(usersList) ? usersList : Object.values(usersList);
    const userIndex = usersArray.findIndex(
      user => user.id && user.id.trim() === userID.trim(),
    );
    const userEntry = usersArray[userIndex];

    await updateUserProgress(userEntry.key, newProgress);
    const updatedUserData = {
      ...currentUserData,
      progress: newProgress,
    };
    dispatch(setUser(updatedUserData));
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
