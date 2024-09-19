import { Outlet, useLocation } from "react-router-dom";
import GradeContainer from "../../Components/GradeComponentTest/GradeConteiner";
import GradeBlock from "../../Components/GradeComponentTest/GradeBlock";
import GradeHeader from "../../Components/GradeComponentTest/GradeHeader";
import cat_grade from "../../assets/images/Frame.svg";
import "./GradingSecond.scss";

export default function GradingFirst() {
  const location = useLocation();
  const showNavigation =
    location.pathname === "/gradingsecond";

  return (
    <div>
      {showNavigation && (
        <>
          <GradeHeader
            gradeTitle="Junior"
            gradeDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
            gradeCat={cat_grade}
          />
          <GradeContainer>
            <GradeBlock
              blockPath="videosecond"
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
    </div>
  );
}
