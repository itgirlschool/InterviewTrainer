import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GradeBlock.scss";
import { useDispatch } from "react-redux";
import { resetProgress } from "../../app/store/slice/UserAuthSlice";

export default function GradeBlock({
  gradeName,
  blockTitle,
  blockDescription,
  blockPath,
  blockStartPath,
  blockProgressValue,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetProgress({ gradeName, blockName: blockPath }));
  };

  return (
    <>
      <h2 className="grading__container_title">{blockTitle}</h2>
      <div className="progressBar">
        <div className="progressBar__title">
          <span>Пройдено: </span>
          <span className="progressBar__value">{blockProgressValue}</span>
          <span>%</span>
        </div>
        <div className="progressBar__outer">
          <div
            className="progressBar__inner"
            style={{ width: `${blockProgressValue}%` }}
          ></div>
        </div>
      </div>
      <div>{blockDescription}</div>
      {blockProgressValue === 0 ? (
        <div className="block__button">
          <Link className="button" to={blockPath}>
            Начать
          </Link>
        </div>
      ) : (
        <div className="block__button">
          <Link className="button" to={blockPath}>
            Продолжить
          </Link>
          <Link className="button_startOver" to={blockStartPath} onClick={handleClick}>
            Начать заново
          </Link>
        </div>
      )}
    </>
  );
}
