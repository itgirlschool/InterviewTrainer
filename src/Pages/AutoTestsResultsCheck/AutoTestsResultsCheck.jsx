import "./AutoTestsResultsCheck.scss";
import { useSelector } from "react-redux";
import Test from "../../Components/TestCards/Test/Test";

export default function AutoTestsResultsCheck() {
  const tests = useSelector(state => state.autoTests.tests);

  return (
    <div className="testResultsCheck">
      <h2>Давай разберём ошибки</h2>
      {tests.map(test => (
        <Test className="test testResultsCheck__container" key={test.id} test={test} />
      ))}
    </div>
  );
}
