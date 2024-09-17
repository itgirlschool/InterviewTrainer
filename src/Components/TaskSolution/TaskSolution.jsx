import "../../Components/TaskSolution/TaskSolution.scss";
import img_lamp from "../../assets/images/img_lamp.svg"
import { useSelector, useDispatch } from "react-redux";
import {
  toggleSolution,
  nextTask,
  toggleHint
} from "../../app/store/slice/TasksSlice";
import { checkSolution } from "../../Services/checkSolution";
import { ArrowRightOutlined } from "@ant-design/icons";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";


const TaskSolution = () => {
  const dispatch = useDispatch();
  const {
    tasks,
    currentTaskIndex,
    showSolution,
    isCorrect,
    isLoading,
    showHint
  } = useSelector(state => state.tasks);
  const currentTask = tasks[currentTaskIndex];

  const handleCheckSolution = () => {
    dispatch(checkSolution());
  };

  return (
    <div>
      <div className="trainer__check">
        <button
          className="codetrainer__button-check"
          onClick={handleCheckSolution}
          disabled={isLoading}
        >
          {isLoading ? "Проверка..." : "Проверить"}
        </button>
      </div>

      <div className="trainer__solution">
      <button
        className="codetrainer__hint"
        onClick={() => dispatch(toggleHint())}
      >
        {!showHint ? "Подсказка" : "Скрыть подсказку"} 
        {!showHint ? <img src={img_lamp} alt="" /> : ""}
      </button>
      {showHint && (
        <div className="hint__text">
          <strong>Подсказка:</strong> {currentTask.hint.base}
        </div>
      )}
        {isCorrect && (
          <div>
            <p>Верное решение!</p>
            <button
              className="codetrainer__pink"
              onClick={() => dispatch(toggleSolution())}
            >
              {!showSolution ? "Посмотреть" : "Скрыть"}{" "}
              решение
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
          <div>
            <p>
              <strong>Решение учителя:</strong>
            </p>
            {/* <pre className="task__answer"><code>{currentTask.solution.base}</code></pre> */}
            <CodeMirror
              value={currentTask.solution.base}
              theme={dracula}
              extensions={[javascript()]}
              readOnly={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskSolution;
