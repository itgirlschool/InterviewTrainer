import "./Theory.scss";
import data from "../../Services/FirstGradData";
import { useEffect, useState, useRef } from "react";
import flag from "../../assets/images/flag_done.svg";
import arrow1 from "../../assets/images/arrow1.svg";
import GetPicture from "./GetPicture";

export default function Theory() {
  const [quest, setQuest] = useState("");
  const [answer, setAnsw] = useState("");
  const [theme, setTheme] = useState("");
  const [image, setImage] = useState([]);
  const [example, setExample] = useState("");
  const [done, setDone] = useState(false);
  const [prev, setPrev] = useState(false);
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState("");
  const [lastId, setLastId] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);

  const myRef = useRef();
  const scrollCallback = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    getTheory(data);
  }, []);

  useEffect(() => {
    scrollCallback();
    getTheory(data);
    setDone(false);
  }, [done]);

  useEffect(() => {
    scrollCallback();
    //отключить кнопку я прочитала?
    getTheory(data);
    setPrev(false);
  }, [prev]);

  const getTheory = (data) => {
    const questArr = Object.values(data);
    let length = questArr.length;
    let a = count - 1;
    console.log(a);
    let item = questArr[a];
    switch (item.theme) {
      case "w":
        setTheme("Web-разработка");
        break;
      case "h":
        setTheme("HTML");
        break;
      case "c":
        setTheme("CSS");
        break;
      case "j":
        setTheme("JavaScript");
        break;
      case "jib":
        setTheme("JS in Browser");
        break;
      case "asyncjs":
        setTheme("Async JS");
        break;
      case "webh":
        setTheme("WEB заголовки");
        break;
      case "es":
        setTheme("ECMAScript");
        break;
      case "r":
        setTheme("React");
        break;
      case "sm":
        setTheme("State Management");
        break;
      default:
        console.log(item.theme);
    }
    setTotal(length);
    setQuest(item.question);
    setAnsw(item.answer);
    setImage(item.images);
    setExample(item.codeexample);
  };

  const handleDone = () => {
    setCount(count + 1);
    setLastId(lastId);
    setDone(true);
  };

  const handlePrev = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrev(true);
    }
  };

  const getProgress = () => {
    //получить прогресс
  };

  const setProgress = () => {
    //посчитать прогресс, отправить в state
  };

  return (
    <div className="theory__window">
      <div className="theory__scroll" ref={myRef}>
        <p className="theory__quest">{quest}</p>
        <p className="theory__theme">{theme}</p>
        <article className="theory__article">
          <section className="theory__answer">{answer}</section>
          <section className={example ? "theory__example" : "hidden"}>
            {example}
          </section>
          <div className="theory__picture">
            {image.map((item, index) => {
              return <GetPicture link={item} key={index} />;
            })}
          </div>
        </article>
        <div className="theory__control">
          <button onClick={handlePrev} className="theory__befor">
            <img src={arrow1} className="theory__img" />
            <p className="button__sighn">Предыдущее</p>
          </button>
          <button onClick={handleDone} className="theory__done">
            <img src={flag} className="theory__img" />
            <p className="button__sighn">Я прочитала</p>
          </button>
        </div>
        <div className="theory__count">
          {count}/{total}
        </div>
      </div>
    </div>
  );
}

// вопрос передавать в компонент бокового меню, когда оно будет готово

//выделение комментариев и определений

//Переделать дизайн

// отключить кнопку "я прочитала", включать при переходе на непройденный вопрос
