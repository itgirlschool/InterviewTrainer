import "../Card.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setHasSelectedAnswer,
  setSelectedAnswer,
} from "../../../app/store/slice/UserAutoTestsSlice";

export default function Radio({ answer }) {
  const hasAnswered = useSelector(
    state => state.userAutoTests.hasAnswered,
  );
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setSelectedAnswer(answer.id));
    dispatch(setHasSelectedAnswer());
  };

  return (
    <div key={answer.id} className="test__answer">
      <input
        type="radio"
        name="testAnswer"
        id={answer.id}
        className="radio"
        // value={answer.id}
        onChange={handleChange}
        disabled={hasAnswered}
      />
      <label htmlFor={answer.id}>{answer.text}</label>
    </div>
  );
}
