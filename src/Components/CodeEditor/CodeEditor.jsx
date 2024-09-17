import "../../Components/CodeEditor/CodeEditor.scss";
import { useDispatch, useSelector } from 'react-redux';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { setUserSolution, checkSolution } from "../../app/store/slice/TasksSlice";

const CodeEditor = () => {
    const dispatch = useDispatch();
    const { userSolution }= useSelector((state) => state.tasks);
    const handleCodeChange = (value) => {
      dispatch(setUserSolution(value));
    };

    return (
      <>
      <div className="trainer__check">
        <button
          className="codetrainer__check"
          onClick={() => dispatch(checkSolution())}
        >
          Проверить
        </button>
      </div>
      <CodeMirror
        value={userSolution}
        theme={dracula}
        height="42vh"
        extensions={[javascript()]}
        onChange={handleCodeChange}
      />
      </ >
    );
};

export default CodeEditor;
