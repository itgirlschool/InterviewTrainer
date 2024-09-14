// import { useParams } from "react-router-dom";
import Radio from "../Radio/Radio";
import "../Card.scss";
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Test({
  test,
  isVisible,
  // setSelectedAnswer,
  // setHasSelectedAnswer,
}) {
  if (!isVisible) return null;

  return (
    <div key={test.id} className="test">
      <div className="test__question">{test.question}</div>

      {test.answers.map(answer => {
        return <Radio key={answer.id} answer={answer} />;
      })}
    </div>
  );
}
