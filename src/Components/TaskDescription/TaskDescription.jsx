import "../../Components/TaskDescription/TaskDescription.scss";
import { useSelector, useDispatch } from "react-redux";

const TaskDescription = () => {
  const dispatch = useDispatch();
  const { tasks, currentTaskIndex } = useSelector((state) => state.tasks);
  const currentTask = tasks[currentTaskIndex];

  return (
    <div className="trainer__question">
      <div className="trainer__name">{currentTask.task_name}</div>
      <div className="task__text">{currentTask.task}</div>
      { currentTask.example && <strong className="task__example">Пример:<br /> {currentTask.example}</strong>}
    </div>
  );
};

export default TaskDescription;
