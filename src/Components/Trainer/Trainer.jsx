import "./Trainer.scss";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useState, useCallback, useRef, useEffect } from "react";
import { dracula } from "@uiw/codemirror-theme-dracula";

export default function Trainer( ) {
  const [answer, setAnswer] = useState(false);
  const refBtn = useRef();
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <>
      <div className="trainer__container">
        <div className="trainer__question">
          <div className="trainer__name">Палиндром</div>
          <div className="trainer__theme">JavaScript</div>
          <div className="task__text">Создать функцию, которая будет проверять, является ли строка палиндромом (одинаково читается справа и слева) и возвращать булевое значение.</div>
          <pre className="task__example">Пример: isPalindrome(‘тест’); //false; isPalindrome(‘шалаш’); //true</pre>
          <pre className="task__answer active">function isPalindrome</pre>
        </div>
        <CodeMirror
          theme={dracula}
          value={value}
          height="50vh"
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />
      </div>
    </>
  );
}
