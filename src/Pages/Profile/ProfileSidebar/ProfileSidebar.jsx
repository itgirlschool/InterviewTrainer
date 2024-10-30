import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./ProfileSidebar.scss";
import exit_icon from "../../../../src/assets/images/exit_icon.svg";
import home_icon from "../../../../src/assets/images/home_icon.svg";
import star_icon from "../../../../src/assets/images/star_icon.svg";
import arrow_for_profile from "../../../../src/assets/images/arrow_for_profile.svg";
import diamond_rose_icon from "../../../../src/assets/images/diamond_rose_icon.svg";
import diamond_yellow_icon from "../../../../src/assets/images/diamond_yellow_icon.svg";
import logout from "../../../Services/fbLogout";

const ProfileSidebar = () => {
  const { displayName } = useSelector(state => state.userAuth);

  const getInitials = name => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="sidebar-profile">
      <div className="header-container">
        <div className="avatar-container">
          <div className="profile__img">{getInitials(displayName)}</div>
        </div>
        <div className="text-container">
          <h2 className="welcome-message">Добро пожаловать</h2>
          <h3 className="display-name">{displayName}</h3>
        </div>
      </div>

      <div className="courses-container">
        <div className="course-header">
          <div className="course-details">
            <span className="course-position">Junior</span>
            <span className="course-date">14.10.2024</span>
          </div>
          <img src={star_icon} alt="Star Icon" className="star-icon" />
        </div>
        <div className="course-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "81%" }}></div>
          </div>
          <span className="progress-text">30/37</span>
        </div>
      </div>

      <div className="skills-container">
        <div className="hard-skills">
          <div className="skill-item">
            <img src={diamond_rose_icon} alt="Hard Skills Icon" className="skill-icon" />
            <div className="skill-details">
              <span className="skill-count">0</span>
              <span className="skill-title">Хард скилы</span>
            </div>
          </div>
        </div>

        <div className="soft-skills">
          <div className="skill-item">
            <img
              src={diamond_yellow_icon}
              alt="Soft Skills Icon"
              className="skill-icon"
            />
            <div className="skill-details">
              <span className="skill-count">0</span>
              <span className="skill-title">Софт скилы</span>
            </div>
          </div>
        </div>
      </div>

      <div className="achievements-container">
        <span className="achievements-title">Мои достижения</span>
        <img src={arrow_for_profile} alt="Arrow" className="arrow-icon" />
      </div>

      <hr className="divider" />

      <div className="button_return">
        <NavLink to="/Home" className="navlink">
          <img src={home_icon} alt="Home Icon" />
          Вернуться на главную
        </NavLink>
      </div>
      <div className="button_logout">
        <button className="navlink" onClick={logout}>
          <img src={exit_icon} alt="Exit Icon" />
          Выход
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;