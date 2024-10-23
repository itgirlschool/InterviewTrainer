import "./Profile.scss";
import Progress from "../../Components/Progress/GeneralProgress";
import React from "react";
import ProfileSidebar from "../Profile/ProfileSidebar/ProfileSidebar";
import ProfileForms from "../../Components/ProfileForms/ProfileForms";

export default function Profile() {
  return (
  <div className="container__main">
  <div className="welcome__block">
  <ProfileSidebar />
  </div>
  <div className="container__info">
  <div className="progress__block"><Progress grade="Intern" gradeName="gradingfirst" /></div>
  <div className="user__info__block">
    <ProfileForms/>
  </div>
  </div>
  </div>
)}
