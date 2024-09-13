import emptyCircle from "../../../../assets/empty-circle.svg";
import "../Card.scss";

export default function Radio({ answer }) {
  return (
    <div key={answer.id} className="test__answer">
      <input
        type="radio"
        name="testAnswer"
        src={emptyCircle}
        alt="circle"
        id={answer.id}
        className="test__radio"
      />
      <label htmlFor={answer.id}>{answer.text}</label>
    </div>
  );
}
