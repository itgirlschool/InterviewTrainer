import React from "react";
import "../GradeContents/GradeContents.scss";

export default function GradeStructure({
  gradeTitle,
  gradeDescription,
  gradeCat,
}) {
  return (
    <div className="grading">
      <div className="grading__intro">
        <div className="grading__intro_block">
          <h2 className="grading__title">{gradeTitle}</h2>
          <p className="grading__description">
            {gradeDescription}
          </p>
        </div>
        <img
          className="cat__junior"
          src={gradeCat}
          alt="Выберите градацию"
        />
      </div>
    </div>
  );
}
