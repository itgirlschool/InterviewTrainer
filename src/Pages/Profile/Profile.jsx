import "./Profile.scss";
import Progress from "../../Components/Progress/GeneralProgress";
import React from "react";

export default function Profile() {
  return (
    <div className="container__main">
      <div className="welcome__block"></div>
      <div className="container__info">
        <div className="progress__block">
          <Progress grade="Intern" />
        </div>
        <div className="user__info__block"></div>
      </div>
    </div>
  );
}
