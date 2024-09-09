import "./CodeTrainer.scss";
import Trainer from "../../Components/Trainer/Trainer";
import { useState } from "react";
import tasksJSON from "../../data/tasks.json";
import { NavLink } from "react-router-dom";

export function CodeTrainer() {
  const [tasks, setTasks] = useState(tasksJSON);
  console.log(tasks);

  if (!tasks) {
    return <h2>Ошибка</h2>;
  }
  return (
    <div className="grading__codetasks">
      <div className="grading__intro">
        <NavLink to="/gradingsecond" className="graiding__name">
          Градация 2
        </NavLink>
        <div className="graiding__section">&gt; CodeTrainer</div>
      </div>
      <div className="codetrainer">
        <Trainer />
      </div>
    </div>
  );
}
