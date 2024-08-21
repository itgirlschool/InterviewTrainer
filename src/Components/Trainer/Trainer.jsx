import "./Trainer.scss";
import img_lamp from "../../assets/images/img_lamp.svg";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState, useCallback, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

export default function Trainer() {
  const [answer, setAnswer] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  const checkTask = <div className="codetrainer__button"></div>;

  const viewSolution = (
    <>
      <button className="codetrainer__pink">
        Посмотреть решение <img src={img_lamp} alt="Посмотреть решение" />
      </button>
      <button className="codetrainer__pink">
        Следующий <ArrowRightOutlined />
      </button>
      </>
  );

  return (
    <>
      <div className="trainer__container">
        <div className="trainer__check">
          <button
            className="codetrainer__button-check"
            onClick={() => setIsClick(!isClick)}
          >
            Проверить
          </button>
        </div>
        <div>
        <div className="trainer__question">
          <div className="trainer__name">Палиндром</div>
          <div className="trainer__theme">JavaScript</div>
          <div className="task__text">
            Создать функцию, которая будет проверять, является ли строка
            палиндромом (одинаково читается справа и слева) и возвращать булевое
            значение.
          </div>
          <pre className="task__example">
            Пример: isPalindrome(‘тест’); //false; isPalindrome(‘шалаш’); //true
          </pre>
          <pre className="task__answer active">
            const fooBar = num =&gt; &#123; for(let i = 1; i &gt= num; i++)
            &#123; if (i % 3 === 0 && i%5 === 0)&#123; console.log('foobar');
            &#125; else if ( i % 3 === 0) {console.log("foo")}; elst if (i % 5
            === 0) {console.log("bar")}; else console.log(i); &#125; &#125;
            &#125;
          </pre>
        </div>
        <CodeMirror
          theme={dracula}
          value={value}
          height="50vh"
          width="30vw"
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />
        <div className="codetaining__console">консоль</div>
        </div>
        <div className="codetaining__buttom">
          <div></div>
          <div className="codetrainer__buttons">
          {!isClick ? checkTask : viewSolution}
          </div>
        </div>
      </div>
    </>
  );
}
