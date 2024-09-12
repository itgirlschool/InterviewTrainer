import "./TheoryPage.scss";
import theoryData from "../../Services/FirstGradData.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Theory from "../../Components/Theory/Theory";
import ThemeNavBar from "../../Components/ThemeNavBar/ThemeNavBar";

export default function TheoryPage() {
  const [questID, setQuestId] = useState(0);
  const [theoryId, setTheoryId] = useState("");
  const [lastId, setLastId] = useState("08f36e18");
  const [navData, setNavData] = useState([]);
  const [quest, setQuest] = useState("");
  const [answer, setAnsw] = useState("");
  const [theme, setTheme] = useState("");
  const [image, setImage] = useState([]);
  const [example, setExample] = useState("");
  const [total, setTotal] = useState("");
  const [count, setCount] = useState(1);
  const [currentId, setCurrentId] = useState("08f36e18");
  const [flagDone, setFlagDone] = useState("");
  const [flag, setFlag] = useState(NaN);
  const [navBarIsHidden, setNavBarIsHidden] =
    useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    getTheory(theoryData);
    getNavData(theoryData);
  }, []);

  useEffect(() => {
    getTheory(theoryData);
    lastId === currentId
      ? setDisabled(false)
      : setDisabled(true);
  }, [count]);

  useEffect(() => {
    getNavData(theoryData);
  }, [currentId]);

  useEffect(() => {
    if (flagDone) {
      let a = navData.findIndex(
        item => item.id === flagDone,
      );
      setFlag(a);
    }
    getNavData(theoryData);
  }, [flagDone]);

  useEffect(() => {
    if (questID != 0) {
      let quest = navData.findIndex(
        item => item.id == questID,
      );
      setCount(quest + 1);
    }
  }, [questID]);

  const toggleNavBar = () => {
    setNavBarIsHidden(!navBarIsHidden);
  };

  const getNavData = theoryData => {
    const questArr = Object.values(theoryData);
    const navDataArr = [];
    questArr.map((item, index) => {
      let qItem = {
        id: item.id,
        question: item.question,
      };
      if (item.id === currentId) {
        qItem.active = true;
      }
      if (index <= flag) {
        qItem.flag = true;
      }
      navDataArr.push(qItem);
    });
    setNavData(navDataArr);
  };

  const getTheory = theoryData => {
    const questArr = Object.values(theoryData);
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
    setTheoryId(item.id);
    setCurrentId(item.id);
  };

  return (
    <div className="theory__page">
      <p className="grad__header">
        <Link className="pink__text" to="/gradingfirst">
          Вернуться назад к градации
        </Link>
      </p>
      <div className="theory__container">
        <ThemeNavBar
          data={navData}
          pagePath={""}
          setQuestId={setQuestId}
          toggleNavBar={toggleNavBar}
        />
        <Theory
          quest={quest}
          answer={answer}
          theme={theme}
          image={image}
          example={example}
          count={count}
          total={total}
          theoryId={theoryId}
          disabled={disabled}
          setCurrentId={setCurrentId}
          setCount={setCount}
          setFlagDone={setFlagDone}
          setLastId={setLastId}
        />
      </div>
    </div>
  );
}
