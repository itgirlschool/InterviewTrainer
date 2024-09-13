import "../../Components/TaskSolution/TaskSolution.scss"; // TODO перенести стили оттуда
import img_sittingcat from "../../assets/images/cat2.svg";
import img_arrow from "../../assets/images/arrow_heart_rigth.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleSolution, nextTask } from "../../app/store/slice/TasksSlice";
import { ArrowRightOutlined } from "@ant-design/icons";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const TaskSolution = () => {
  const dispatch = useDispatch();
  const { tasks, currentTaskIndex, showSolution, isCorrect } = useSelector((state) => state.tasks);
  const currentTask = tasks[currentTaskIndex];

  return (
    <>
      <div className="trainer__solution">
        <img src={img_sittingcat} alt="Здесь можно увидеть подсказку" />
        <img src={img_arrow} alt="Здесь можно увидеть подсказку" />
      {isCorrect ? (
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
      ) : "Тут ты можешь получить подсказку"}
      {showSolution && (
        <div>
          <p><strong>Решение учителя:</strong></p>
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
    </>
  );
};

export default TaskSolution;
