import "./AutoTestsSlider.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TestCard from "../TestCards/TestCard";

export default function AutoTestsSlider() {
  const navigate = useNavigate();
  const { id } = useParams();
  const tests = useSelector(state => state.autotests.tests);
  const currentTest = parseInt(id, 10);
  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    setHasAnswered(false);
  }, [id]);

  const handleAnswer = () => {
    return <div>Я ответила</div>;
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
      onClick={handleAnswer}
    >
      Ответить
    </button>
  );

  const buttonNext = (
    <button className="slider__button" onClick={handleNext}>
      Далее
    </button>
  );

  return (
    <div className="slider">
      <div className="slider__count">
        {id}/{tests.length}
      </div>
      <div className="slider__cardContainer">
        <div>
          <TestCard />
        </div>
        <div className="slider__buttons">
          {/* {!hasAnswered ? buttonAnswer : buttonNext} */}
          {buttonNext}
        </div>
      </div>
    </div>
  );
}
