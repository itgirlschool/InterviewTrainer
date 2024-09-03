import { Link } from "react-router-dom";
import "./AutoTests.scss";
import AutoTestsSlider from "../AutoTestsSlider/AutoTestsSlider";

export default function AutoTests({ linkBack }) {
  return (
    <div className="autotests">
      <div className="autotests__title">
        <Link className="autotests__mainlink" to={linkBack}>
          Вернуться к градации
        </Link>
      </div>
      <AutoTestsSlider />
    </div>
  );
}
