import "./AutoTestsSlider.scss";
import AutoTestsCard from "../AutoTestsCard/AutoTestsCard.jsx";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function AutoTestsSlider() {
  const { id } = useParams();
  const tests = useSelector(state => state.autotests.tests);

  // const [count, setCount] = useState(0);
  // const [trueAnswersResult, setTrueAnswersResult] =
  //   useState(); //Здесь храним количество правильных ответов

  return (
    <div className="slider">
      <div className="slider__count">
        {id}/{tests.length}
      </div>
      {/* <AutoTestsCard /> */}
      {/* <Card
        item={tests[count]}
        count={count}
        setCount={setCount}
        tests={tests}
        setTrueAnswersResult={setTrueAnswersResult}
        trueAnswersResult={trueAnswersResult}
      /> */}
    </div>
  );
}
