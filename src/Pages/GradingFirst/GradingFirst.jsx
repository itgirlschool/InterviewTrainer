import { Outlet, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GradeContainer from "../../Components/GradeContainer/GradeContainer";
import GradeIntro from "../../Components/GradeIntro/GradeIntro";
import GradeBlock from "../../Components/GradeBlock/GradeBlock";
import cat_grade from "../../assets/images/cat_first-grade.svg";
import "./GradingFirst.scss";

export default function GradingFirst() {
  const location = useLocation();
  const gradeName = location.pathname.slice(1);

  const grade = useSelector(state =>
    state.userAuth.progress.find(g => g.gradeName === gradeName),
  );

  const progressVideo =
    grade?.blocks.find(b => b.blockName === "videofirst")?.blockProgress || 0;
  const progressTheory =
    grade?.blocks.find(b => b.blockName === "theoryfirst")?.blockProgress || 0;
  const progressTests =
    grade?.blocks.find(b => b.blockName === "testsfirst")?.blockProgress || 0;
  const progressInterviews =
    grade?.blocks.find(b => b.blockName === "interviewfirst")?.blockProgress || 0;

  const showNavigation = location.pathname === "/gradingfirst";

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
          />
          <GradeContainer>
            <GradeBlock
              gradeName="gradingfirst"
              blockPath="videofirst"
              blockTitle="Видеоуроки"
              blockProgressValue={progressVideo}
              blockStartPath={"/gradingfirst/videofirst/1"}
              blockDescription="В этой секции ты сможешь наглядно изучить основные принципы веб-разработки через обучающие видеоматериалы. Простые и понятные объяснения помогут тебе быстро усвоить ключевые темы."
            />
            <GradeBlock
              gradeName="gradingfirst"
              blockPath="theoryfirst"
              blockTitle="Теория"
              blockProgressValue={progressTheory}
              blockStartPath={"/gradingfirst/theoryfirst/1"}
              blockDescription="Здесь ты найдешь подробные материалы по HTML, CSS и JavaScript в текстовом виде. Читай, изучай, закрепляй теоретические знания и возвращайся к ним при необходимости."
            />
            <GradeBlock
              gradeName="gradingfirst"
              blockPath="testsfirst"
              blockTitle="Тесты"
              blockProgressValue={progressTests}
              blockStartPath={"/gradingfirst/testsfirst/1"}
              blockDescription="Проверяй свои знания и закрепляй пройденный материал с помощью тестов. Выполняй задания и следи за своим прогрессом — так ты убедишься, что готов к собеседованиям."
            />
            <GradeBlock
              gradeName="gradingfirst"
              blockPath="interviewfirst"
              blockTitle="Видео прохождения собеседований"
              blockProgressValue={progressInterviews}
              blockStartPath={"/gradingfirst/interviewfirst/1"}
              blockDescription="Посмотри реальные примеры собеседований для начинающих разработчиков. Это поможет тебе лучше понять процесс и подготовиться к вопросам, которые могут встретиться на интервью."
            />
          </GradeContainer>
        </>
      )}
      <Outlet />
    </>
  );
}
