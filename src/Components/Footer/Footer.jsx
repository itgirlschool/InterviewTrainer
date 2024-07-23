import "./Footer.scss";
import img_google from "../../assets/images/img_chrome.png";
import img_insta from "../../assets/images/img_insta.png";
import img_whatsapp from "../../assets/images/img_watsapp.png";
import img_facebook from "../../assets/images/img_facebook.png";
import img_telegram from "../../assets/images/img telegram.png";



export default function Footer() {
  return (
    <footer className="footer"> 
      <button className="footer__button">
      <a href="https://itgirlschool.com/">
      <img className="footer__img" src={img_google} alt="Перейти на страницу ITGIRLS">
      </img>
      </a>
      </button>
      <button className="footer__button">
      <a href="https://www.instagram.com/itgirlschool/"><img className="footer__img" src={img_insta} alt="Перейти в инстаграмм ITGIRLS"></img></a>
      </button>
      <button className="footer__button">
      <a href="https://api.whatsapp.com/send/?phone=79965221233&text&type=phone_number&app_absent=0"><img className="footer__img"  src={img_whatsapp} alt="Перейти в WhatsApp"></img></a>
      </button>
      <button className="footer__button">
      <a href="https://www.facebook.com/itgirlschool"><img className="footer__img"  src={img_facebook} alt="Перейти в Facebook"></img></a>
      </button>
      <button className="footer__button">
      <a href="https://t.me/itgirlschool"><img className="footer__img" src={img_telegram} alt="Перейти в Telegram"></img></a></button>
    </footer>
  )
}
