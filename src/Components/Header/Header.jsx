import "./Header.scss";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import img_logo from "../../assets/images/logo.svg";
import img_profileLittle from "../../assets/images/img_profile.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import logout from "../../Services/fbLogout";
import { removeUser } from "../../app/store/slice/UserAuthSlice.js";
import { useDispatch } from "react-redux";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  const { displayName, avatar } = useSelector(state => state.userAuth);
const  dispatch = useDispatch()
  const getInitials = displayName => {
    if (!displayName) return "AN";
    const initials = displayName
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase();
    return initials;
  };

  const progressTotal = useSelector(state => {
    const progress = state.userAuth?.progress;
    if (progress && progress.length > 0) {
      const gradeName = "gradingfirst";
      const grade = progress.find(g => g.gradeName === gradeName);
      return grade ? grade.totalProgress : 0;
    }
    return 0;
  });

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
          <div className="profile__img">
              {avatar ? (
                <img src={avatar} alt="Avatar" className="avatar__image" />
              ) : (
                getInitials(displayName)
              )}
            </div>
          </div>
          <div className="school__600">Нас уже 600+ учениц</div>
        </div>
        <button
          onClick={() => setBurgerActive(!burgerActive)}
          className={`burger__img ${!burgerActive ? "menu" : "close"}`}
        ></button>
      </div>
      <div className={` ${isOpen ? "overlay" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className={`header__popup ${isOpen ? "active" : ""}`}>
          <div className="popup__username">{displayName || "Anonymous User"}</div>
          <div className="popup__raitinginfo">
            <div className="pupup__grade">Intern</div>
            <div className="popup__percent">{progressTotal}%</div>
            <progress
              className="popup__progress"
              max="100"
              value={progressTotal}
            ></progress>
          </div>
          <NavLink className="popup__link" to="/profile">
            <img src={img_profileLittle} alt="Мой профиль" />
            Мой профиль
          </NavLink>
          <button className="popup__link" onClick={()=>{
            logout().then(()=>{dispatch(removeUser())})
          }}>
            <LogoutOutlined className="icon" />
            Выйти
          </button>
        </div>
      </div>
      <div
        className={`burger ${burgerActive ? "active" : ""}`}
        onClick={() => setBurgerActive(!burgerActive)}
      >
        <div className="burger__username">
        <div className="profile__img">{avatar ? <img src={avatar} alt="Avatar" className="avatar__image" /> : getInitials(displayName)}</div>
          <div>{displayName || "Anonymous User"}</div>
        </div>
        <div className="burger__raiting">
          <div className="rainting__intro">
            <div className="active__status">Active</div>
            <div>Градация 1</div>
            <div className="popup__percent">{progressTotal}%</div>
          </div>
          <progress
            className="burger__progress"
            max="100"
            value={progressTotal}
          ></progress>
        </div>
        <NavLink className="popup__link burger__line" to="/profile">
          <img src={img_profileLittle} alt="Мой профиль" />
          Мой профиль
        </NavLink>
        <button className="popup__link" onClick={()=>{
          logout().then(()=>{dispatch(removeUser())})
        }}>
          <LogoutOutlined className="icon" />
          Выйти
        </button>
      </div>
    </header>
  );
}
