import {
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";
import GradeContainer from "../../Components/GradeContainer/GradeContainer";
import GradeIntro from "../../Components/GradeIntro/GradeIntro";
import GradeBlock from "../../Components/GradeBlock/GradeBlock";
import cat_grade from "../../assets/images/cat_first-grade.svg";
import "./GradingFirst.scss";

export default function GradingFirst() {
  const location = useLocation();
  const showNavigation =
    location.pathname === "/gradingfirst";

  return (
    <>
      {showNavigation && (
        <>
          <div className="nav_link">
            <Link className="nav_link__home" to="/home">
              Вернуться на главную
            </Link>
          </div>
          <GradeIntro
            gradeTitle="Intern"
            gradeDescription="В этой градации ты сможешь закрепить знания по основным принципам веб-разработки, такие как HTML, CSS и JavaScript. Ты познакомишься с типичными вопросами и заданиями, которые могут быть заданы на собеседованиях, для начинающих разработчиков. Ознакомься с обучающими видео и теорией, проходи тест. Все получится!"
            gradeCat={cat_grade}
            videoPath="videofirst"
            theoryPath="theoryfirst"
            testsPath="testsfirst"
            videoDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
            theoryDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
            testsDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
          />
          <GradeContainer>
            <GradeBlock
              blockPath="videofirst"
              blockTitle="Видеоуроки"
              blockProgressValue={0}
              blockDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            />
            <GradeBlock
              blockPath="theoryfirst"
              blockTitle="Теория"
              blockProgressValue={30}
              blockDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            />
            <GradeBlock
              blockPath="testsfirst"
              blockTitle="Тесты"
              blockProgressValue={0}
              blockDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            />
          </GradeContainer>
        </>
      )}
      <Outlet />
    </>
  );
}
