import "./Header.scss";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import img_logo from "../../assets/images/logo.svg";
import img_profileLittle from "../../assets/images/img_profile.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  const { displayName } = useSelector((state) => state.userAuth);

  const getInitials = (displayName) => {
    if (!displayName) return "AN";
    const initials = displayName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
    return initials;
  };

  return (
    <header className="header">
      <div className="header__body">
        <NavLink className="header__logo" to="/home">
          <img src={img_logo} alt="Перейти на главную страницу" />
        </NavLink>
        <div className="header__links">
          <div>Открытые уроки</div>
          <div>Профессии</div>
          <div>Интересные курсы</div>
          <div>О школе</div>
        </div>
        <div className="header__user">
          <div onClick={() => setIsOpen(!isOpen)}>
            <div className="profile__img">{getInitials(displayName)}</div>
          </div>
          <div className="school__600">Нас уже 600+ учениц</div>
        </div>
        <button
          onClick={() => setBurgerActive(!burgerActive)}
          className={`burger__img ${!burgerActive ? "menu" : "close"}`}
        ></button>
      </div>
      <div
        className={` ${isOpen ? "overlay" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`header__popup ${isOpen ? "active" : ""}`}>
          <div className="popup__username">
            {displayName || "Anonymous User"}
          </div>
          <div className="popup__raitinginfo">
            <div className="pupup__grade">Градация 1</div>
            <div className="popup__percent">50%</div>
            <progress
              className="popup__progress"
              max="100"
              value="50"
            ></progress>
          </div>
          <NavLink className="popup__link" to="/profile">
            <img src={img_profileLittle} alt="Мой профиль" />
            Мой профиль
          </NavLink>
          <NavLink className="popup__link" to="#">
            <SettingOutlined className="icon" />
            Настройки
          </NavLink>
          <NavLink className="popup__link" to="/signin">
            <LogoutOutlined className="icon" />
            Выйти
          </NavLink>
        </div>
      </div>
      <div
        className={`burger ${burgerActive ? "active" : ""}`}
        onClick={() => setBurgerActive(!burgerActive)}
      >
        <div className="burger__username">
          <div className="profile__img">{getInitials(displayName)}</div>
          <div>{displayName || "Anonymous User"}</div>
        </div>
        <div className="burger__raiting">
          <div className="rainting__intro">
            <div className="active__status">Active</div>
            <div>Градация 1</div>
            <div className="burger__percent">50%</div>
          </div>
          <progress
            className="burger__progress"
            max="100"
            value="50"
          ></progress>
        </div>
        <NavLink className="popup__link burger__line" to="/profile">
          <img src={img_profileLittle} alt="Мой профиль" />
          Мой профиль
        </NavLink>
        <NavLink className="popup__link burger__line" to="#">
          <SettingOutlined className="icon" />
          Настройки
        </NavLink>
        <NavLink className="popup__link" to="/signin">
          <LogoutOutlined className="icon" />
          Выйти
        </NavLink>
      </div>
    </header>
  );
}
