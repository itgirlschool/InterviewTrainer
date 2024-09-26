import "./GeneralProgress.scss";
import catGeneralProgress from "../../assets/images/background_cat-lk-progress.svg";
import { useSelector } from "react-redux";

function GeneralProgress({ grade }) {
  let progressWidth = 30;

  // const fullProgressData = useSelector(
  //   state => state.userAuth.progress,
  // );

  // const gradeData = fullProgressData.find(
  //   level => level.gradeName === grade,
  // );

  // if (grade === "Intern") {
  //   console.log(gradeData);
  // }

  return (
    <div className="progress__wrapper">
      {/* wrapper - позже как rel для img кота abs или удалим */}
      <div className="progress">
        <h2 className="progress__grade">{grade}</h2>
        <div className="progress__bar">
          <p className="progress__bar_label">
            Пройдено: <span>{progressWidth}%</span>
          </p>
          <div className="progress__bar_outer">
            <div
              className="progress__bar_inner"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
        </div>
      </div>
      <img
        className="progress__catpic"
        src={catGeneralProgress}
        alt="cat_general_progress"
      />
    </div>
  );
}

export default GeneralProgress;
