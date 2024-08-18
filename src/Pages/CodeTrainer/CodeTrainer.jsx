import "./CodeTrainer.scss";
import {
  ArrowRightOutlined
} from "@ant-design/icons";
import img_lamp from "../../assets/images/img_lamp.svg";
import Trainer from "../../Components/Trainer/Trainer";
import { useState } from "react";
import tasksJSON from "../../data/tasks.json";
import { NavLink } from "react-router-dom";

export function CodeTrainer() {
  const [tasks, setTasks] = useState(tasksJSON);
  console.log(tasks);
  const [isClick, setIsClick] = useState(false)
 
  const checkTask = (
    <div className="codetrainer__button">
    <button 
          className="codetrainer__check"
          onClick={() => setIsClick(!isClick)}>Проверить</button>
    </div>
  )

  const viewSolution = (
    <div className="codetrainer__buttons">
      <button className="codetrainer__pink">
            Посмотреть решение <img src={img_lamp} alt="Посмотреть решение" />
          </button>
    <button 
          className="codetrainer__pink"
        >Следующий <ArrowRightOutlined /></button>
  </div>)
  
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
        <div className="codetaining__buttom">
        <div></div>
        {!isClick ? checkTask : viewSolution}
        </div>
      </div>
    </div>
  );
}
