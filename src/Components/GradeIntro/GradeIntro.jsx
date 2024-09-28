import React from "react";

import "./GradeIntro.scss";

export default function GradeIntro({
  gradeTitle,
  gradeDescription,
  gradeCat,
}) {
  return (
    <div className="grading__intro">
      <div className="grading__intro_block">
        <h2 className="grading__title">{gradeTitle}</h2>
        <p className="grading__description">
          {gradeDescription}
        </p>
      </div>
      <img
        className="cat"
        src={gradeCat}
        alt="Выберите градацию"
      />
    </div>
  );
}
