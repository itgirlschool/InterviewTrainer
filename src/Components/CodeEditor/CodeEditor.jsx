import "../../Components/Trainer/Trainer"; // TODO перенести стили оттуда
import { useDispatch, useSelector } from 'react-redux';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { setUserSolution } from "../../app/store/slice/TasksSlice";

const CodeEditor = () => {
    const dispatch = useDispatch();
    const { userSolution }= useSelector((state) => state.tasks);

    return (
      <CodeMirror
        value={userSolution}
        theme={dracula}
        // height="50vh"
        width="30vw"
        extensions={[javascript()]}
        onChange={(value) => dispatch(setUserSolution(value))}
      />
    );
};

export default CodeEditor;
