import React from "react";
import { Link } from "react-router-dom";
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
          <p>{videoDescription}</p>
          <Link className="button" to={videoPath}>
            Начать
          </Link>
        </div>
        <div className="grading__container_block">
          <h2 className="grading__container_title">
            Теория
          </h2>
          <div>{theoryDescription}</div>
          <Link className="button" to={theoryPath}>
            Начать
          </Link>
        </div>
        <div className="grading__container_block">
          <h2 className="grading__container_title">
            Тесты
          </h2>
          <div>{testsDescription}</div>
          <Link className="button" to={testsPath}>
            Начать
          </Link>
        </div>
      </div>
    </div>
  );
}
