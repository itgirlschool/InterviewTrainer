import "./Header.scss";
import img_logo from "../../assets/images/logo_it1.png";
import { NavLink } from "react-router-dom";
import img_profile from "../../assets/images/img_profile_big.png"

export default function Header() {
  return (
    <div className="header">
        <NavLink className="header__logo" to="/home"><img src={img_logo} alt="Перейти на главную страницу"></img></NavLink>
        <div className="header__links">
          <NavLink className="header__link" to="">Текст</NavLink>
          <NavLink className="header__link" to="/instructions">Инструкции</NavLink>
          <img src={img_profile} alt="Профиль"></img>
        </div>
        <div className="header__burger">
          
        </div>
    </div>
  )
}
