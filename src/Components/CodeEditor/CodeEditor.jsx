import "../../Components/CodeEditor/CodeEditor.scss";
import { useDispatch, useSelector } from "react-redux";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { setUserSolution } from "../../app/store/slice/TasksSlice";

const CodeEditor = () => {
    const dispatch = useDispatch();
    const { userSolution }= useSelector((state) => state.tasks);

    const handleCodeChange = (value) => {
      dispatch(setUserSolution(value));
    };

    return (
      <CodeMirror
        value={userSolution}
        theme={dracula}
        height="42vh"
        extensions={[javascript()]}
        onChange={handleCodeChange}
      />
    );
};

export default CodeEditor;
