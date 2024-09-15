import Radio from "../Radio/Radio";
import "../Card.scss";

export default function Test({ test, isVisible }) {
  if (!isVisible) return null;

  return (
    <div key={test.id} className="test">
      <div className="test__question">{test.question}</div>

      {test.answers.map(answer => {
        return (
          <Radio
            key={answer.id}
            answer={answer}
            testId={test.id}
          />
        );
      })}
    </div>
  );
}
