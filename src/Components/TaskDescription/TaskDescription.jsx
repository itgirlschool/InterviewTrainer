import "../../Components/TaskDescription/TaskDescription.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleHint } from "../../app/store/slice/TasksSlice";
import img_lamp from "../../assets/images/img_lamp.svg"

const TaskDescription = () => {
  const dispatch = useDispatch();
  const { tasks, currentTaskIndex, showHint } = useSelector((state) => state.tasks);
  const currentTask = tasks[currentTaskIndex];

  return (
    <div className="trainer__question">
      <div className="trainer__name">{currentTask.task_name}</div>
      <div className="task__text">{currentTask.task}</div>
      { currentTask.example && <strong className="task__example">Пример:<br /> {currentTask.example}</strong>}
      
      <button
        className="codetrainer__hint"
        onClick={() => dispatch(toggleHint())}
      >
        {!showHint ? "Подсказка" : "Скрыть подсказку"} 
        {!showHint ? <img src={img_lamp} alt="" /> : ""}
      </button>
      {showHint && <div className="hint__text"><strong>Подсказка:</strong> {currentTask.hint.base}</div>}
    </div>
  );
};

export default TaskDescription;
