import {
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";
import GradeContainer from "../../Components/GradeContainer/GradeContainer";
import GradeIntro from "../../Components/GradeIntro/GradeIntro";
import GradeBlock from "../../Components/GradeBlock/GradeBlock";
import cat_grade from "../../assets/images/cat_second-grade.svg";
import "./GradingSecond.scss";

export default function GradingSecond() {
  const location = useLocation();
  const showNavigation =
    location.pathname === "/gradingsecond";

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
            gradeTitle="Junior"
            gradeDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            gradeCat={cat_grade}
          />
          <GradeContainer>
            <GradeBlock
              blockPath="interviewsecond"
              blockTitle="Видео прохождения собеседований"
              blockProgressValue={0}
              blockDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            />
            <GradeBlock
              blockPath="/"
              blockTitle="Теория"
              blockProgressValue={30}
              blockDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            />
            <GradeBlock
              blockPath="/"
              blockTitle="Разбор задач"
              blockProgressValue={0}
              blockDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            />
            <GradeBlock
              blockPath="/"
              blockTitle="Разбор тестовых заданий"
              blockProgressValue={30}
              blockDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            />
            <GradeBlock
              blockPath="/"
              blockTitle="Решение задач"
              blockProgressValue={30}
              blockDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            />
            <GradeBlock
              blockPath="/"
              blockTitle="Тесты"
              blockProgressValue={30}
              blockDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            />
          </GradeContainer>
        </>
      )}
      <Outlet />
    </>
  );
}
