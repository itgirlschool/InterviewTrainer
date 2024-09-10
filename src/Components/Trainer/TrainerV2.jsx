import "./Trainer.scss"; // TODO перенести стили оттуда
import TaskDescription from "../TaskDescription/TaskDescription";
import CodeEditor from "../CodeEditor/CodeEditor";
import TaskSolution from "../TaskSolution/TaskSolution";

const TrainerV2 = () => {
  return (
    <div className="trainer__container">
      <div><TaskDescription /></div>
      <div><CodeEditor/></div>
      <div><TaskSolution/></div>
    </div>
  )
}

export default TrainerV2