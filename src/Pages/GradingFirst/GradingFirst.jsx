import { Outlet, useLocation, Link} from "react-router-dom";
import GradeContents from "../../Components/GradeContents/GradeContents";
import "./GradingFirst.scss"

export default function GradingFirst() {
  const location = useLocation();

  const showNavigation = location.pathname === "/gradingfirst";

  return (
    <div className="gradingFirst__page">
      {showNavigation && (
        <>
          <Link className="gradingFirst__linkToStart" to="/home">
            Вернуться на главную
          </Link>

          <GradeContents
            grading="Intern"
            gradeDescription="В этой градации ты сможешь закрепить знания по основным принципам веб-разработки, такие как HTML, CSS и JavaScript. Ты познакомишься с типичными вопросами и заданиями, которые могут быть заданы на собеседованиях, для начинающих разработчиков. Ознакомься с обучающими видео и теорией, проходи тест. Все получится!"
            videoPath="videofirst"
            theoryPath="/"
            testsPath="/"
            videoDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
            theoryDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
            testsDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
          />
        </>
      )}
      <Outlet />
    </div>
  );
}
