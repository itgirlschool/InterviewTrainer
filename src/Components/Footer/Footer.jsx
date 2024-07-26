import "./Footer.scss";
import img_google from "../../assets/images/img_google.svg";
import img_insta from "../../assets/images/img_insta.svg";
import img_whatsapp from "../../assets/images/img_whatsapp.svg";
import img_facebook from "../../assets/images/img_facebook.svg";
import img_telegram from "../../assets/images/img_telegram.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer"> 
      <button className="footer__button">
      <NavLink target="_blank" to="https://itgirlschool.com/">
      <img className="footer__img" src={img_google} alt="Перейти на страницу ITGIRLS" />
      </NavLink>
      </button>
      <button className="footer__button">
      <NavLink target="_blank" to="https://www.instagram.com/itgirlschool/"><img className="footer__img" src={img_insta} alt="Перейти в инстаграмм ITGIRLS" /></NavLink>
      </button>
      <button className="footer__button">
      <NavLink target="_blank" to="https://api.whatsapp.com/send/?phone=79965221233&text&type=phone_number&app_absent=0"><img className="footer__img"  src={img_whatsapp} alt="Перейти в WhatsApp" /></NavLink>
      </button>
      <button className="footer__button">
      <NavLink target="_blank" to="https://www.facebook.com/itgirlschool" ><img className="footer__img"  src={img_facebook} alt="Перейти в Facebook" /></NavLink>
      </button>
      <button className="footer__button">
      <NavLink target="_blank" to="https://t.me/itgirlschool"><img className="footer__img" src={img_telegram} alt="Перейти в Telegram" /></NavLink></button>
    </footer>
  )
}
