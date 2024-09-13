import "../../Components/TaskSolution/TaskSolution.scss"; // TODO перенести стили оттуда
import { useSelector, useDispatch } from "react-redux";
import { checkSolution, toggleSolution, nextTask } from "../../app/store/slice/TasksSlice";
import { ArrowRightOutlined } from "@ant-design/icons";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const TaskSolution = () => {
  const dispatch = useDispatch();
  const { tasks, currentTaskIndex, showSolution, isCorrect } = useSelector((state) => state.tasks);
  const currentTask = tasks[currentTaskIndex];

  return (
    <div>
      <div className="trainer__check">
        <button
          className="codetrainer__button-check"
          onClick={() => dispatch(checkSolution())}
        >
          Проверить
        </button>
      </div>
      {isCorrect && (
        <div>
          <p>Верное решение!</p>
          <button
            className="codetrainer__pink"
            onClick={() => dispatch(toggleSolution())}
          >
            {!showSolution ? "Посмотреть" : "Скрыть"} решение
          </button>
          <button
            className="codetrainer__pink"
            onClick={() => dispatch(nextTask())}
          >
            Следующая задача <ArrowRightOutlined />
          </button>
        </div>
      )}
      {showSolution && (
        <div className="trainer__question">
          <p><strong>Решение учителя:</strong></p>
          {/* <pre className="task__answer"><code>{currentTask.solution.base}</code></pre> */}
          <CodeMirror
            value={currentTask.solution.base}
            theme={dracula}
            height="50vh"
            width="50vw"
            extensions={[javascript()]}
            readOnly={true}
          />
        </div>
      )}
    </div>
  );
};

export default TaskSolution;
