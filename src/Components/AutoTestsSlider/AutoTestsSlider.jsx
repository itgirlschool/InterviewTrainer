import "./AutoTestsSlider.scss";
// import AutoTestsCard from "../AutoTestsCard/AutoTestsCard.jsx";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function AutoTestsSlider() {
  const navigate = useNavigate();
  const { id } = useParams();
  const tests = useSelector(state => state.autotests.tests);
  const currentTest = parseInt(id, 10);

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

  // const [count, setCount] = useState(0);
  // const [trueAnswersResult, setTrueAnswersResult] =
  //   useState(); //Здесь храним количество правильных ответов

  return (
    <div className="slider">
      <div className="slider__count">
        {id}/{tests.length}
      </div>
      <div className="slider__cardContainer">
        <div>
          {/* <AutoTestsCard> */}
          <p>some text</p>
          <p>some text</p>
          <p>some text</p>
          <p>some text</p>
          <p>some text</p>
          <p>some text</p>
        </div>
        {buttonNext}
        {buttonAnswer}
      </div>
    </div>
  );
}

{
  /* <Card
        item={tests[count]}
        count={count}
        setCount={setCount}
        tests={tests}
        setTrueAnswersResult={setTrueAnswersResult}
        trueAnswersResult={trueAnswersResult}
      /> */
}
