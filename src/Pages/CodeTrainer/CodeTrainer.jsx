import "./CodeTrainer.scss";
import Trainer from "../../Components/Trainer/Trainer";
import TrainerV2 from "../../Components/Trainer/TrainerV2";
import { NavLink } from "react-router-dom";

export function CodeTrainer() {
  return (
    <div className="grading__codetasks">
        <NavLink to="/gradingsecond" className="graiding__name">
          Вернуться назад к градации 
        </NavLink>
      <div className="codetrainer">
        {/* <Trainer /> */}
        <TrainerV2 />
      </div>
    </div>
  );
}
