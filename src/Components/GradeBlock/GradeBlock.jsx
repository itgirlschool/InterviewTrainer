import React from "react";
import { Link } from "react-router-dom";

export default function GradeBlock ({
    title,
    videoDescription,
    videoPath,
}) {

    return (
        <div className="grading__block">
            <h2 className="grading__block_title">
            {title}
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
    )
}