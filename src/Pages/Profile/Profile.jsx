import "./Profile.scss";
import React from "react";
import ProfileSidebar from "../Profile/ProfileSidebar/ProfileSidebar";

export default function Profile() {
  return (
  <div className="container__main">
  <div className="welcome__block">
  <ProfileSidebar />
  </div>
  <div className="container__info">
  <div className="progress__block"></div>
  <div className="user__info__block">
  </div>
  </div>
  </div>
)}
