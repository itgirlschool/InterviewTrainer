import "./Trainer.scss"; // TODO перенести стили оттуда
import TaskDescription from "../TaskDescription/TaskDescription";
import CodeEditor from "../CodeEditor/CodeEditor";
import TaskSolution from "../TaskSolution/TaskSolution";
import CodeConsole from "../CodeConsole/CodeConsole";

const TrainerV2 = () => {
  return (
    <>
    <div className="trainer__container">
      <div className="trainer__left-content">
          <TaskDescription />
          <div><TaskSolution /></div>
      </div>
      <div className="trainer__rigth-content">
          <CodeEditor />
          <CodeConsole />
      </div>
      </div>
    </>
  );
};

export default TrainerV2;
