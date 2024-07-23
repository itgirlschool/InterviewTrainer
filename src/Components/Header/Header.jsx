import "./Header.scss";
import { CloseOutlined,
  MenuOutlined,
  SettingOutlined,
  LogoutOutlined
 } from '@ant-design/icons';
import img_logo from "../../assets/images/logo_it1.png";
import img_profile from "../../assets/images/img_profile_big.png";
import img_profileLittle from "../../assets/images/img_profile.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__body">
      <NavLink className="header__logo" to="/home"><img src={img_logo} alt="Перейти на главную страницу"></img></NavLink>
        <div className="header__links">
          <NavLink  to="/home">Выбор градации</NavLink>
          <NavLink  to="/instructions">Инструкции</NavLink>
          <div>
            <img onClick={() => setIsOpen(!isOpen)} src={img_profile} alt="Профиль"></img>
          {/* всплывающее окно */}
            <div className={`header__popup ${isOpen ? "active" : ""}`}>
            <div>UserName</div>
            <div className="popup__raitinginfo">
            <div>Градация 1</div>
            <div className="popup__percent">50%</div>
            <progress className="popup__progress" max="100" value="50"></progress>
            </div>
            <NavLink className="popup__link" to="/profile">
            <img src={img_profileLittle} alt="Мой профиль"></img>
            Мой профиль</NavLink>
            <NavLink className="popup__link" to="">
              <SettingOutlined className="icon" />
              Настройки</NavLink>
            <NavLink className="popup__link" to="/signin">
            <LogoutOutlined className="icon" />
            Выйти</NavLink>
          </div>
          </div>
        </div>
        </div>
      </header>
  )
}
