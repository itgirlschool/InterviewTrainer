import "./Theory.scss";
import data from "../../Services/FirstGradData";
import { useEffect, useState } from "react";
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
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState("");

  useEffect(() => {
    getTheory(data);
    setProgress();
    setDone(false);
  }, [done]);

  //useEffect при изменении done вызвать новую стр и изменить значение счётчика
  //зациклить счётчик на конце и залочить на начале

  const getTheory = (data) => {
    const questArr = Object.values(data);
    let length = questArr.length;
    let a = count - 1;
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
      case "r":
        setTheme("React");
        break;
      default:
        console.log(item.theme);
    }
    setTotal(length);
    setQuest(item.question);
    setAnsw(item.answer);
    setImage(item.images);
    console.log(image);
    console.log(typeof image);
  };

  //достать массив ключей
  //достать значение
  //вывести значение
  //сделать красиво через css

  const handleDone = () => {
    setCount(count + 1);
    setDone(true);
  };

  const getProgress = () => {
    //получить прогресс
  };

  const setProgress = () => {
    let progress = (total / 100) * count;
    console.log(progress);

    //записать прогресс в состояние юзера
    //записать ключ последнего пройденного урока
  };

  return (
    <div className="theory__window">
      <p className="theory__quest">{quest}</p>
      <p className="theory__theme">{theme}</p>
      <article className="theory__article">
        <section className="theory__answer">{answer}</section>
        <section>{example}</section>
        <div className="theory__picture">
          {image.map((item) => {
            console.log(item);
            return <GetPicture link={item} />;
          })}
        </div>
      </article>
      <div className="theory__control">
        <button className="theory__befor">
          <img src={arrow1} className="theory__img" />
          <p className="button__sighn">Предыдущее</p>
        </button>
        <button className="theory__done">
          <img src={flag} className="theory__img" />
          <p className="button__sighn" onClick={handleDone}>
            Я прочитала
          </p>
        </button>
      </div>
      <div className="theory__count">
        {count}/{total}
      </div>
    </div>
  );
}

//открывать следующий вопрос после нажатия кнопки "я прочитала"
// передать юзеру прогркесс в процентах
//вопрос передавать в компонент бокового меню, когда оно будет готово
