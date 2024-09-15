import "./Trainer.scss"; // TODO перенести стили оттуда
import { useSelector } from "react-redux";
import TaskDescription from "../TaskDescription/TaskDescription";
import CodeEditor from "../CodeEditor/CodeEditor";
import TaskSolution from "../TaskSolution/TaskSolution";
import Output from "../Output/Output";

const TrainerV2 = () => {
  const { currentTaskIndex, tasks } = useSelector(state => state.tasks);

  if (currentTaskIndex >= tasks.length) {
    return <div>Поздравляем, ты решила все задачи этого блока!</div>;
  }
  
  return (
    <div className="trainer__container">
      <div><TaskDescription /></div>
      <div><CodeEditor/></div>
      <div><TaskSolution/></div>
      <div><Output /></div>
    </div>
  )
}

export default TrainerV2