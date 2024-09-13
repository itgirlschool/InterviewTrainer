// import { useParams } from "react-router-dom";
import Radio from "../Radio/Radio";
import "../Card.scss";
// import { useEffect } from "react";

export default function Test({ test, isVisible }) {
  if (!isVisible) return null;

  return (
    <div key={test.id} className="test">
      <div className="test__question">{test.question}</div>

      {test.answers.map(answer => {
        return <Radio answer={answer} />;
      })}
    </div>
  );
}
