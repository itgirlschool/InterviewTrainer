import "./AutoTestsResults.scss";
import catPic from "../../assets/images/cat_page_autotests_results.svg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AutoTestsResults() {
  const navigate = useNavigate();
  const testsCount = useSelector(state => state.autoTests.tests).length;
  const correctAnswersCount = useSelector(
    state => state.userAutoTests.correctAnswersCount,
  );

  const handleAgain = () => {
    navigate("/gradingfirst/testsfirst/1");
  };

  const handleCheckMistakes = () => {
    navigate("/gradingfirst/testsfirst/resultscheck");
  };

  return (
    <div className="testResults">
      <div className="testResults__container">
        <div className="testResults__catImg">
          <img src={catPic} alt="cat" />
        </div>
        <div className="testResults__info">
          <div className="testResults__info-nums">
            {correctAnswersCount} из {testsCount} правильных ответов
          </div>
          <div className="testResults__info-text">
            {correctAnswersCount === testsCount ? (
              <>
                Умничка!
                <br />
                Так держать!
              </>
            ) : (
              <>
                Чуть-чуть не хватило,
                <br /> не унывай!
                <br />
                Разбери ошибки и попробуй
                <br />
                еще раз!
              </>
            )}
          </div>
          <div className="testResults__info-btns">
            <button className="testResults__info-btnView" onClick={handleCheckMistakes}>
              Разобрать ошибки
            </button>
            <button className="testResults__info-btnAgain" onClick={handleAgain}>
              Пройти заново
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
