import React from "react";
import { Link } from "react-router-dom";
import "./GradeStructure.scss";
import cat_grade from "../../assets/images/Frame.svg";

export default function GradeStructure({
  grading,
  gradeDescription,
  videoPath,
  theoryPath,
  problemsRevPath,
  testsRevPath,
  problemsPath,
  testsPath,

  videoDescription,
  theoryDescription,
  testsDescription,
  problemsRevDescription,
  testsRevDescription,
  problemsDescription,
}) {
  return (
    <div className="grading">
                
      <div className="grading__intro">
      <div className="grading__intro_block">
      <h2 className="grading__title">{grading}</h2>
      <p className="grading__description">
        {gradeDescription}
      </p>
      </div>
      <img className="cat__junior" src={cat_grade} alt="Выберите градацию" />
      </div>
      <div className="grading__container">
        <div className="grading__container_block">
          <h2 className="grading__container_title">
            Видео прохождения собеседований
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
            Разбор задач
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
          <div>{problemsRevDescription}</div>
          <Link className="button" to={problemsRevPath}>
            Начать
          </Link>
        </div>
        <div className="grading__container_block">
          <h2 className="grading__container_title">
            Разбор тестовых заданий
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
          <div>{testsRevDescription}</div>
          <Link className="button" to={testsRevPath}>
            Начать
          </Link>
        </div><div className="grading__container_block">
          <h2 className="grading__container_title">
            Решение задач
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
          <div>{problemsDescription}</div>
          <Link className="button" to={problemsPath}>
            Начать
          </Link>
        </div><div className="grading__container_block">
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
