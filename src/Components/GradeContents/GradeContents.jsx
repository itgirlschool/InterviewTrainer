import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./GradeContents.scss";

export default function GradeContents({
  grading,
  gradeDescription,
  videoPath,
  theoryPath,
  testsPath,
  videoDescription,
  theoryDescription,
  testsDescription,
}) {
  const location = useLocation();
  const showNavigation = location.pathname === "/gradecontents";
  console.log(location.pathname);

  return (
    <div className="grading">
      <h2 className="grading__title">{grading}</h2>
      <p className="grading__description">
        {gradeDescription}
      </p>

      <div className="grading__container">
        <div className="grading__container_block">
          <h2 className="grading__container_title">
            Видеоуроки
          </h2>
          <div className="progressBar">
            <div className="progressBar__title">
              <span>Пройдено: </span>
              <span className="progressBar__value">30</span>
              <span>%</span>
            </div>
            <div className="progressBar__outer">
              <div className="progressBar__inner"></div>
            </div>
          </div>
          <p>{videoDescription}</p>
          <Link className="button" to={videoPath}>
            Начать
          </Link>
        </div>
        <div className="grading__container_block">
          <h2 className="grading__container_title">
            Теория
          </h2>
          <div className="progressBar">
            <div className="progressBar__title">
              <span>Пройдено: </span>
              <span className="progressBar__value">30</span>
              <span>%</span>
            </div>
            <div className="progressBar__outer">
              <div className="progressBar__inner"></div>
            </div>
          </div>
          <div>{theoryDescription}</div>
          <Link className="button" to={theoryPath}>
            Начать
          </Link>
        </div>
        <div className="grading__container_block">
          <h2 className="grading__container_title">
            Тесты
          </h2>
          <div className="progressBar">
            <div className="progressBar__title">
              <span>Пройдено: </span>
              <span className="progressBar__value">30</span>
              <span>%</span>
            </div>
            <div className="progressBar__outer">
              <div className="progressBar__inner"></div>
            </div>
          </div>
          <div>{testsDescription}</div>
          <Link className="button" to={testsPath}>
            Начать
          </Link>
        </div>
      </div>
    </div>
  );
}
