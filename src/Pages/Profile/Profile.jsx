import "./Profile.scss";
import React from "react";
import Profile_Sidebar from "./Profile_Sidebar";

export default function Profile() {
  return (
  <div className="container__main">
  <div className="welcome__block">
  <Profile_Sidebar />
  </div>
  <div className="container__info">
  <div className="progress__block"></div>
  <div className="user__info__block">
  </div>
  </div>
  </div>
)}
