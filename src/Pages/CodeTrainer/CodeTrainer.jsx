import "./CodeTrainer.scss";
import img_lamp from "../../assets/images/img_lamp.svg";
import Trainer from "../../Components/Trainer/Trainer";
import { useState } from "react";
import tasksJSON from "../../data/tasks.json";
import { NavLink } from "react-router-dom";

export function CodeTrainer() {
  const [tasks, setTasks] = useState(tasksJSON);
  const [solution, setSolution] = useState(false);
  console.log(tasks);
  //const [count, setCount] = useState(0);

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
        <div className="codetrainer__buttons">
          <button className="codetrainer__solution">
            Посмотреть решение <img src={img_lamp} alt="Посмотреть решение" />
          </button>
          <button className="codetrainer__check">Проверить</button>
        </div>
      </div>
    </div>
  );
}
