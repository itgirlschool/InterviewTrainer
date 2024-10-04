import "./GeneralProgress.scss";
import catGeneralProgress from "../../assets/images/background_cat-lk-progress.svg";
import { useSelector } from "react-redux";

function GeneralProgress({ grade, gradeName }) {
  const progressWidth = useSelector(state => {
    const progress = state.userAuth?.progress;
    if (progress && progress.length > 0) {
      const grade = progress.find(g => g.gradeName === gradeName);
      return grade ? grade.totalProgress : 0;
    }
    return 0;
  });

  return (
    <div className="progress__wrapper">
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
      <div className="progress__catpic__wrapper">
        <img
          className="progress__catpic"
          src={catGeneralProgress}
          alt="cat_general_progress"
        />
      </div>
    </div>
  );
}

export default GeneralProgress;
