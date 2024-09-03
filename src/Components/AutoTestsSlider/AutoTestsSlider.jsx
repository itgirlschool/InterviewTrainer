import "./AutoTestsSlider.scss";
import Card from "../Card/Card.jsx";
import { useState, useEffect } from "react";
import { tests } from "./tests.js";

export default function AutoTestsSlider() {
  const [count, setCount] = useState(0);
  const [trueAnswersResult, setTrueAnswersResult] =
    useState(); //Здесь храним количество правильных ответов

  if (trueAnswersResult) {
    //Временная проверка для того чтобы увидеть отрабатывает ли код
    console.log(trueAnswersResult);
  }

  return (
    <div className="slider">
      <div className="slider__count">
        {count + 1}/{tests.length}
      </div>
      <Card
        item={tests[count]}
        count={count}
        setCount={setCount}
        tests={tests}
        setTrueAnswersResult={setTrueAnswersResult}
        trueAnswersResult={trueAnswersResult}
      />
    </div>
  );
}
